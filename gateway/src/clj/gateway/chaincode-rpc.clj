(ns gateway.chaincode-rpc
  (:import [trial-chain.chaincode.record
            ;OrgHyperledgerChaintoolMeta$GetInterfacesParams
            ])
  (:require [clojure.java.io :as io]
            [clj-http.client :as http]
            [flatland.protobuf.core :as fl]
            [clojure.data.codec.base64 :as base64]
            [cheshire.core :as json]
            [doric.core :as doric]))

(defn- encode [item] (-> item fl/protobuf-dump base64/encode (String. "UTF-8")))
(defn- decode [type item] (->> item .getBytes base64/decode (fl/protobuf-load type)))

(defn- url [{:keys [host port]}]
  (str "http://" host ":" port "/chaincode"))

;;--------------------------------------------------------------------------------------
;; post - performs a synchronous http/jsonrpc to the server, evaluating to the response
;;--------------------------------------------------------------------------------------
(defn- post [{:keys [method name func args] :as options}]
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

;;--------------------------------------------------------------------------------------
;; invokes a "query" operation on top of (post) and evaluates to a successful response
;; or throws an exception
;;--------------------------------------------------------------------------------------
(defn- query [args]
  (let [{:keys [body]} (post (assoc args :method "query"))
        response (-> body (json/parse-string true) (select-keys [:result :error]))]

    (if (= (-> response :result :status) "OK")
      (->> response :result :message)
      ;; else
      (util/abort -1 (str response)))))

;;--------------------------------------------------------------------------------------
;; get-* operations invoke specific query operations
;;--------------------------------------------------------------------------------------
(defn- get-messages
  "gets all messages stored for patient"
  [{:keys [host port] :as options}]
  (let [response (query (assoc options
                               :func "trial-chain.chaincode.record/query/1"
                               :args (fl/protobuf EmptyParams))))]

    (decode List response)))
