(ns trial-chain.core
  (:require [cljs.nodejs :as nodejs]
            [trial-chain.rpc :as rpc]))

(def pb (nodejs/require "protobufjs"))
(def builder (.newBuilder pb))

(defn- loadproto [name]
  (do
    (.loadProtoFile pb (str "./" name ".proto") builder)
    (.build builder name)))

(def init (loadproto "appinit"))
(def app (loadproto "trial_chain.chaincode.record"))

(defn deploy [{:keys [args] :as options}]
  (rpc/deploy (assoc options
                     :func "init"
                     :args (init.Init. args)
                     :cb (fn [resp] (println "Response:" resp)))))

(defn invoke [index args options]
  (rpc/invoke (assoc options
                     :func (+ "trial-chain.chaincode.record/txn/" index)
                     :args (app.Item. args)
                     :cb (fn [resp] (println "Response:" resp)))))

(defn authorize-trial [{:keys [args] :as options}]
  (invoke 1 args options))

(defn revoke-authorization [{:keys [args] :as options}]
  (invoke 2 args options))

(defn send-message [{:keys [args] :as options}]
  (invoke 3 args options))

(defn delete-message [{:keys [args] :as options}]
  (invoke 4 args options))
  
(defn get-record [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.record/query/1"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (->> resp :result :message app.Item.decode64)]
                              (println "Success: Record =" (.-data result)))
                            ;; else
                            (println "Failure:" resp))))))

(defn get-messages [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.record/query/2"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (->> resp :result :message app.List.decode64)]
                              (println "Success: Messages =" (map #(.-data %) (.-items result))))
                            ;; else
                            (println "Failure:" resp))))))

(defn get-authorized-trials [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.record/query/3"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (->> resp :result :message app.List.decode64)]
                              (println "Success: Authorized Trials =" (map #(.-data %) (.-items result))))
                            ;; else
                            (println "Failure:" resp))))))
