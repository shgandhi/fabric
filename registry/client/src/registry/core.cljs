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
(def app (loadproto "trial_chain.chaincode.registry"))

(defn deploy [{:keys [args] :as options}]
  (rpc/deploy (assoc options
                     :func "init"
                     :args (init.Init. args)
                     :cb (fn [resp] (println "Response:" resp)))))

(defn invoke [index args options]
  (rpc/invoke (assoc options
                     :func (+ "trial-chain.chaincode.registry/txn/" index)
                     :args (app.TrialEntry. args)
                     :cb (fn [resp] (println "Response:" resp)))))

(defn add-entry [{:keys [args] :as options}]
  (invoke 1 args options))
  
(defn remove-entry [{:keys [args] :as options}]
  (invoke 2 args options))

(defn get-trial-description [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/1"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (->> resp :result :message app.TrialEntry.decode64)]
                              (println "Success: TrialEntry =" (.-data result)))
                            ;; else
                            (println "Failure:" resp))))))

(defn get-trial-list [{:keys [args] :as options}]
  (rpc/query (assoc options
                    :func "trial-chain.chaincode.registry/query/2"
                    :args (app.EmptyParams. args)
                    :cb (fn [resp]
                          (if (= (->> resp :result :status) "OK")
                            (let [result (->> resp :result :message app.List.decode64)]
                              (println "Success: All trials =" (map #(.-data %) (.-trialEntries result))))
                            ;; else
                            (print
ln "Failure:" resp))))))


