(ns gateway.handler
  (:require [compojure.core :refer [GET POST defroutes routes context]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [gateway.middleware :refer [wrap-site wrap-api]]
            [selmer.parser :as parser]
            [config.core :refer [env]]
            [clj-ipfs-api.core :as ipfs]
            [gateway.registry :as registry]))

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(def loading-page
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "/js/app.js")]))

(def cards-page
  (html5
    (head)
    [:body
     mount-target
     (include-js "/js/app_devcards.js")]))

(def test-page
  (html5
    (head)
    [:body "Test reload!"]))

;(ipfs/set-api-url! "http://localhost:5001")
(defn add-file [file & {:as args}]
  (ipfs/add (merge {:request {:method :post
                              :multipart [{:name "file"
                                           :content (:tempfile file)
                                           :filename (:filename file)}]}}
                   args)))

(defn hash-file [file]
  (add-file file :n true))

(defn add-record [patient file]
  (let [hash (:Hash (hash-file file))]
    (registry/add-record {:patient patient :hash hash})
    (add-file file)
    hash))

(defn resource [r]
 (-> (Thread/currentThread)
     (.getContextClassLoader)
     (.getResource r)
     slurp))

(defroutes site
  (GET "/" [] 
     (parser/render-file "templates/app.html"
                        {:forms-css (resource "reagent-forms.css")
                         :json-css (resource "json.human.css")}))
  (GET "/cards" [] cards-page)
  (GET "/test" [] test-page)
  (resources "/")
  (not-found "Not Found"))

(defroutes api
  (context "/api" []
    (POST "/add-record" [patient file] (str (add-record patient file)))))

(def app (routes (wrap-api api)
                 (wrap-site site)))
