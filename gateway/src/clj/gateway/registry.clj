(ns gateway.registry
  (:import [registry
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

(defn- encode [item] (-> item fl/protobuf-dump base64/encode (String. "UTF-8")))
(defn- decode [type item] (->> item .getBytes base64/decode (fl/protobuf-load type)))

(defn- bytes->str [bytes]
  (apply str (map char bytes)))

(defn- unpack-item [item]
  (->> item :data bytes->str))

(defn- unpack-list [list]
  (->> list :items (map unpack-item)))

(defmulti unpack #(first %&))
(defmethod unpack List
  [_ list]
  (unpack-list (decode List list)))
(defmethod unpack Item
  [_ item]
  (unpack-item (decode Item item)))

(defn pack [type & {:as args}]
  (prn args)
  (encode (fl/protobuf type args)))

;; throws an exception that should unwind us all the way to the core/main
;; function and exit cleanly with an error message rather than a stacktrace, etc
(defn- abort [retval msg]
  (slingshot/throw+ {:type :abort :retval retval :msg msg}))

(defn- url [{:keys [host port] :or {host "localhost" port 5000}}]
  (str "http://" host ":" port "/chaincode"))

;;-----------------------------------------------------------------------------
;; post - performs a synchronous http/jsonrpc to the server, evaluating to the response
;;-----------------------------------------------------------------------------
(defn post [{:keys [method name func args] :as options}]
  (let [body {:jsonrpc "2.0"
              :method method
              :params {:type 3
                       :chaincodeID {:name name}
                       :ctorMsg {:function func
                                 :args [(encode args)]}}
              :id "1"}]
    (http/post (url options)
               {:content-type :json
                :accept :json
                :form-params body})))

;;-----------------------------------------------------------------------------
;; invokes a "query" operation on top of (post) and evaluates to a successful response
;; or throws an exception
;;-----------------------------------------------------------------------------
(defn query [args]
  (let [{:keys [body]} (post (assoc args :method "query"))
        response (-> body (json/parse-string true) (select-keys [:result :error]))]
    (if (= (-> response :result :status) "OK")
      (->> response :result :message)
      ;; else
      (abort -1 (str response)))))

;;-----------------------------------------------------------------------------
;; get-* operations invoke specific query operations
;;-----------------------------------------------------------------------------
(defn- rpc-get
  "Query a function via the chaincode rest api"
  [return-type {:keys [func args] :as options}]
  (if-let [response (query options)]
    (unpack return-type response)))

(defn get-record
  "gets the record"
  [options]
  (rpc-get Item (assoc options
                  :func "trial-chain.chaincode.record/query/1"
                  :args (fl/protobuf EmptyParams))))

(defn get-messages
  "gets all messages stored for patient"
  [options]
  (rpc-get List (assoc options
                  :func "trial-chain.chaincode.record/query/2"
                  :args (fl/protobuf EmptyParams))))

(defn get-authorized-trials
  "gets all messages stored for patient"
  [options]
  (rpc-get List (assoc options
                  :func "trial-chain.chaincode.record/query/3"
                  :args (fl/protobuf EmptyParams))))
