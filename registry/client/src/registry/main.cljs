(ns registry.main
  (:require [clojure.string :as string]
            [cljs.nodejs :as nodejs]
            [cljs.tools.cli :refer [parse-opts]]
            [registry.core :as core]))


(nodejs/enable-util-print!)

(def _commands
  [["deploy"
    {:fn core/deploy}]
   ["add-trial"
    {:fn core/add-trial
     :default-args #js {:data "TrialHash"}}]
   ["remove-trial"
    {:fn core/remove-trial
     :default-args #js {:data "TrialHash"}}]
   ["add-record"
    {:fn core/add-record
     :default-args #js
     {:hash "RecordHash"
      :patient "PatientKey"}}]
   ["authorize-trial"
    {:fn core/authorize-trial
     :default-args #js {:data "TrialHash"}}]
   ["revoke-authorization"
    {:fn core/revoke-authorization
     :default-args #js {:data "TrialHash"}}]
   ["send-message"
    {:fn core/send-message
     :default-args #js {:data "Hello!"}}]
   ["delete-message"
    {:fn core/delete-message
     :default-args #js {:data "Hello!"}}]

   ["get-patient-key"
    {:fn core/get-patient-key}]
   ["get-trial-list"
    {:fn core/get-trial-list
     :default-args #js {}}]
   ["get-authorized-trials"
    {:fn core/get-authorized-trials}]])
   
(def commands (into {} _commands))
(defn print-commands [] (->> commands keys vec print-str))

(def options
  [[nil "--host HOST" "Host name"
    :default "localhost"]
   [nil "--port PORT" "Port number"
    :default 5000
    :parse-fn #(js/parseInt %)
    :validate [#(< 0 % 65536) "Must be a number between 0 and 65536"]]
   ["-p" "--path PATH" "Path/URL to the chaincode (deploy only, mutually exclsive with -n)"]
   ["-n" "--name NAME" "Name of the chaincode (mutually exclusive with -p)"]
   ["-c" "--command CMD" (str "One of " (print-commands))
    :default "get-trial-list"
    :validate [#(contains? commands %) (str "Supported commands: " (print-commands))]]
   ["-a" "--args ARGS" "JSON formatted arguments to submit"]
   ["-h" "--help"]])

(defn exit [status msg & rest]
  (do
    (apply println msg rest)
    status))

(defn prep-usage [msg] (->> msg flatten (string/join \newline)))

(defn usage [options-summary]
  (prep-usage ["Usage: trial-chain [options]"
               ""
               "Options Summary:"
               options-summary
               ""
               ]))

(defn run [{:keys [path name command args] :as options}]
  (let [desc (commands command)
        _args (if (nil? args) (:default-args desc) (.parse js/JSON args))]
    (cond
      (and (some? path) (some? name))
      (println "ERROR: -p and -n are mutually exclusive")

      (and (nil? path) (nil? name))
      (println "ERROR: Must specify either -p or -n")

      (and (some? path) (not= command "deploy"))
      (println "ERROR: -p only valid with deploy command")

      :else
      (let [id (if (some? path) #js {:path path} #js {:name name})]
        (println (str "Running " command "(" (.stringify js/JSON _args) ")"))
        ((:fn desc) (assoc options :id id :args _args))))))

(defn -main [& args]
    (let [{:keys [options arguments errors summary]} (parse-opts args options)]
    (cond

      (:help options)
      (exit 0 (usage summary))

      (not= errors nil)
      (exit -1 "Error: " (string/join errors))

      :else
      (run options))))

(set! *main-cli-fn* -main)
