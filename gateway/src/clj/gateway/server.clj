(ns gateway.server
  (:require [gateway.handler :refer [app]]
            [config.core :refer [env]]
            [org.httpkit.server :as http])
  (:gen-class))

 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))]
     (http/run-server app {:port port :join? false})))
