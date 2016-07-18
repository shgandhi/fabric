(ns gateway.chaincode-rpc
  (:import [record
            Interface$Item
            Interface$List
            Interface$EmptyParams
            ])
  (:require [clojure.java.io :as io]
            [clj-http.client :as http]
            [flatland.protobuf.core :as fl]
            [clojure.data.codec.base64 :as base64]
            [cheshire.core :as json]
            [slingshot.slingshot :as slingshot]
            ))

(def Item (fl/protodef Interface$Item))
(def List (fl/protodef Interface$List))
(def EmptyParams (fl/protodef Interface$EmptyParams))

(defn encode [item] (-> item fl/protobuf-dump base64/encode (String. "UTF-8")))
(defn decode [type item] (->> item .getBytes base64/decode (fl/protobuf-load type)))

(defn bytes->str [bytes]
  (apply str (map char bytes)))

(defn unpack-item [item]
  (->> item :data bytes->str))

(defn unpack-list [list]
  (->> list :items (map unpack-item)))

;; throws an exception that should unwind us all the way to the core/main
;; function and exit cleanly with an error message rather than a stacktrace, etc
(defn abort [retval msg]
  (slingshot/throw+ {:type :abort :retval retval :msg msg}))

(defn url [{:keys [host port]}]
  (str "http://" host ":" port "/chaincode"))

;;--------------------------------------------------------------------------------------
;; post - performs a synchronous http/jsonrpc to the server, evaluating to the response
;;--------------------------------------------------------------------------------------
(defn post [{:keys [method name func args] :as options}]
  (let [body {:jsonrpc "2.0"
              :method method
              :params {:type 3
                       :chaincodeID {:name name}
                       :ctorMsg {:function func
                                 :args [(encode args)]}}
              :id "1"}]
    (println body)
    (http/post (url options)
               {:content-type :json
                :accept :json
                :form-params body})))

;;--------------------------------------------------------------------------------------
;; invokes a "query" operation on top of (post) and evaluates to a successful response
;; or throws an exception
;;--------------------------------------------------------------------------------------
(defn query [args]
  (let [{:keys [body]} (post (assoc args :method "query"))
        response (-> body (doto prn) (json/parse-string true) (select-keys [:result :error]))]
    (if (= (-> response :result :status) "OK")
      (->> response :result :message)
      ;; else
      (abort -1 (str response)))))

;;--------------------------------------------------------------------------------------
;; get-* operations invoke specific query operations
;;--------------------------------------------------------------------------------------
(defn get-messages
  "gets all messages stored for patient"
  [{:keys [host port] :as options}]
  (let [response (query (assoc options
                               :func "trial-chain.chaincode.record/query/2"
                               :args (fl/protobuf EmptyParams)))]
    (unpack-list (decode List response))))
