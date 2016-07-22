(ns gateway.middleware
  (:require [ring.middleware.defaults :refer [site-defaults api-defaults wrap-defaults]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.reload :refer [wrap-reload]]))

(defn wrap-middleware [handler opts]
  (-> handler
      (wrap-defaults opts)
      wrap-exceptions
      wrap-reload))

(defn wrap-site [handler]
  (wrap-middleware handler site-defaults))

(defn wrap-api [handler]
  (wrap-middleware handler (assoc-in api-defaults [:params :multipart] true)))
