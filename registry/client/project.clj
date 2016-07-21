(defproject registry "0.1.0-SNAPSHOT"
  :min-lein-version "2.0.0"
  :description "Clojurescript client for trial-chain registry"
  :url "http://trial-chain/registry"
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
  :cljsbuild {:builds [{:id "registry"
                        :source-paths ["src"]
                        :compiler {:output-to "out/registry.js"
                                   :output-dir "out"
                                   :source-map true
                                   :optimizations :none
                                   :target :nodejs
                                   :main "registry.main"
                                   :pretty-print true}}]}
  

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                [org.clojure/tools.nrepl "0.2.10"]]
                 :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})

