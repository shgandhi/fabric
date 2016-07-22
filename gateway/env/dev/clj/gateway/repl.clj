(ns gateway.repl
  (:require [gateway.handler :refer [app]]
            [ring.server.standalone :refer [serve]]
            [figwheel-sidecar.repl-api :as figwheel]
            [ring.middleware.reload :refer [wrap-reload]])
  (:use [ring.middleware content-type file]))

(defonce server (atom nil))

(defn get-handler []
  ;; #'app expands to (var app) so that when we reload our code,
  ;; the server is forced to re-resolve the symbol in the var
  ;; rather than having its own copy. When the root binding
  ;; changes, the server picks it up without having to restart.
  (-> #'app
      ; Makes static assets in $PROJECT_DIR/resources/public/ available.
      (wrap-file "resources")
      ; Content-Type, Content-Length, and Last Modified headers for files in body
      (wrap-content-type)))

(defn start-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  (let [port (if port (Integer/parseInt port) 3000)]
    (reset! server
            (serve (get-handler)
                   {:port port
                    :auto-reload? true
                    :join? false}))
    (println (str "You can view the site at http://localhost:" port))))

(defn stop-server []
  (.stop @server)
  (reset! server nil))

;; figwheel versions
(def http-handler
  (wrap-reload #'app))

(defn run []
  (figwheel/start-figwheel! "app" "devcards"))

(def browser-repl figwheel/cljs-repl)
