(ns gateway.registry
  (:import [registry
            Interface$Item
            Interface$List
            Interface$Record
            Interface$Pair
            Interface$EmptyParams
            ])
  (:require [clojure.java.io :as io]
            [org.httpkit.client :as http]
            [flatland.protobuf.core :as fl]
            [clojure.data.codec.base64 :as base64]
            [cheshire.core :as json]
            [slingshot.slingshot :as slingshot]
            ))

(def Item (fl/protodef Interface$Item))
(def List (fl/protodef Interface$List))
(def Record (fl/protodef Interface$Record))
(def Pair (fl/protodef Interface$Pair))
(def EmptyParams (fl/protodef Interface$EmptyParams))

(defn- encode [item] (-> item fl/protobuf-dump base64/encode (String. "UTF-8")))
(defn- decode [type item] (->> item .getBytes base64/decode (fl/protobuf-load type)))

(defn- bytes->str [bytes]
  (apply str (map char bytes)))

(defmulti unpack #(first %&))
(defmethod unpack List
  [_ list]
  (->> (decode List list) :items (map :data)))
(defmethod unpack Item
  [_ item]
  (:data (decode Item item)))
(defmethod unpack :default
  [type data]
  (decode type data))

(defn pack [type & {:as args}]
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
(defn post [{:keys [method name func args] :as options :or {name "registry"}}]
  (let [body {:jsonrpc "2.0"
              :method method
              :params {:type 3
                       :chaincodeID {:name name}
                       :ctorMsg {:function func
                                 :args [(encode args)]}}
              :id "1"}]
    (prn options)
    @(http/post (url options)
               {:body (json/encode body)})))

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
;; RPC function invocations
;;-----------------------------------------------------------------------------
(defn invoke [{:as options}]
  (post (assoc options :method "invoke")))

(defn add-trial [trial & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/1"
                 :args (fl/protobuf Item :data trial))))

(defn remove-trial [trial & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/2"
                 :args (fl/protobuf Item :data trial))))

(defn add-record [record & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/3"
                 :args (fl/protobuf Record record))))

(defn authorize-trial [record trial & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/4"
                 :args (fl/protobuf Pair :key record :value trial))))

(defn revoke-authorization [record trial & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/5"
                 :args (fl/protobuf Pair :key record :value trial))))

(defn send-message [record message & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/6"
                 :args (fl/protobuf Pair :key record :value message))))

(defn delete-message [record message & {:as options}]
  (invoke (assoc options
                 :func "registry/txn/7"
                 :args (fl/protobuf Pair :key record :value message))))

;;-----------------------------------------------------------------------------
;; get-* operations invoke specific query operations
;;-----------------------------------------------------------------------------
(defn- rpc-get
  "Query a function via the chaincode rest api"
  [return-type {:keys [func args] :as options}]
  (if-let [response (query options)]
    (unpack return-type response)))

(defn get-patient-key
  "gets the patient key associated with a record"
  [record & {:as options}]
  (rpc-get Item (assoc options
                  :func "registry/query/1"
                  :args (fl/protobuf Item :data record))))

(defn get-trial-list
  "gets a list of all active trials"
  [&{:as options}]
  (rpc-get List (assoc options
                  :func "registry/query/2"
                  :args (fl/protobuf EmptyParams))))

(defn get-messages
  "gets all messages stored for patient"
  [record & {:as options}]
  (rpc-get List (assoc options
                  :func "registry/query/3"
                  :args (fl/protobuf Item :data record))))

(defn get-authorized-trials
  "gets all messages stored for patient"
  [record & {:as options}]
  (rpc-get List (assoc options
                  :func "registry/query/4"
                  :args (fl/protobuf Item :data record))))
