(ns registry.core
  (:require [cljs.nodejs :as nodejs]
            [registry.rpc :as rpc]))

(def pb (nodejs/require "protobufjs"))
(def builder (.newBuilder pb))

(defn- loadproto [name]
  (do
    (.loadProtoFile pb (str "./" name ".proto") builder)
    (.build builder name)))

(def init (loadproto "appinit"))
(def app (loadproto "trial_chain.chaincode.registry"))

(defn deploy [{:keys [args] :as options}]
  (rpc/deploy (assoc options
                     :func "init"
                     :args (init.Init. #js {})
                     :cb (fn [resp] (println "Response:" resp)))))

(defn invoke [index args options]
  (rpc/invoke (assoc options
                     :func (+ "trial-chain.chaincode.registry/txn/" index)
                     :args args
                     :cb (fn [resp] (println "Response:" resp)))))

(defn add-trial [{:keys [args] :as options}]
  (invoke 1 (app.Item. args) options))
  
(defn remove-trial [{:keys [args] :as options}]
  (invoke 2 (app.Item. args) options))

(defn add-record [{:keys [args] :as options}]
  (invoke 3 (app.Record. args) options))
  
(defn authorize-trial [{:keys [args] :as options}]
  (invoke 4 (app.Pair. args) options))

(defn revoke-authorization [{:keys [args] :as options}]
  (invoke 5 (app.Pair. args) options))

(defn send-message [{:keys [args] :as options}]
  (invoke 6 (app.Pair. args) options))

(defn delete-message [{:keys [args] :as options}]
  (invoke 7 (app.Pair. args) options))

;---------- Query functions ----------

(defn get-patient-key [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/1"
                    :args (app.Item. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (if-let [result (some-> resp :result :message app.Item.decode64)]
                              (println "Success: PatientKey =" (.-data result)))
                            ;; else
                            (println "Failure:" resp))))))

(defn get-trial-list [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/2"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (some-> resp :result :message app.List.decode64)]
                              (println "Success: All trials ="
                                       (map #(.-data %) (.-items result))))
                            ;; else
                            (println "Failure:" resp))))))


(defn get-messages [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/3"
                    :args (app.Item. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (if-let [result (some-> resp :result :message app.List.decode64)]
                              (println "Success: Messages =" (map #(.-data %) (.-items result))))
                            ;; else
                            (println "Failure:" resp))))))

(defn get-authorized-trials [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/4"
                    :args (app.Item. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (if-let [result (some-> resp :result :message app.List.decode64)]
                              (println "Success: Authorized trials =" (map #(.-data %) (.-items result))))
                            ;; else
                            (println "Failure:" resp))))))
