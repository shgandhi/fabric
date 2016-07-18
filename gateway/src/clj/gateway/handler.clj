(ns gateway.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [gateway.middleware :refer [wrap-middleware]]
            [selmer.parser :as parser]
            [config.core :refer [env]]))

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
    [:body "Test!"]))

(defn resource [r]
 (-> (Thread/currentThread)
     (.getContextClassLoader)
     (.getResource r)
     slurp))

(defroutes routes
  (GET "/" [] 
     (parser/render-file "templates/app.html"
                        {:forms-css (resource "reagent-forms.css")
                         :json-css (resource "json.human.css")}))
  ;;(GET "/about" [] loading-page)
  ;;(GET "/cards" [] cards-page)
  ;;(GET "/test" [] test-page)  
  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
