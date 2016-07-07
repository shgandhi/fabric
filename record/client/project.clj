(defproject trial-chain "0.1.0-SNAPSHOT"
  :min-lein-version "2.0.0"
  :description "Clojurescript client for trial-chain"
  :url "http://trial-chain/"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.34"]
                 [org.clojure/tools.cli "0.3.3"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]
            [lein-cljsbuild "1.1.3"]]
  :npm {:dependencies [[source-map-support "0.4.0"]
                       [protobufjs "5.0.1"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :cljsbuild {:builds [{:id "trial-chain"
                        :source-paths ["src"]
                        :compiler {:output-to "out/trial-chain.js"
                                   :output-dir "out"
                                   :source-map true
                                   :optimizations :none
                                   :target :nodejs
                                   :main "trial-chain.main"
                                   :pretty-print true}}]})
