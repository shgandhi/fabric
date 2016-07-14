(ns gateway.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [ajax.core :refer [POST]]))

;;-------------------------
;; Helpers

(def state (atom {:doc {} :saved? false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input [id label]
  [row label
   [:input {:type "text"
            :class "form-control"
            :value (get-value id)
            :on-change #(set-value! id (-> % .-target .-value))}]])

(defn save-doc []
  (POST (str js/context "/save")
        {:params (:doc @state)
         :handler (fn [_] (swap! state assoc :saved? true))}))
;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Trial-Chain Web App"]
   [:div [:a {:href "/clinic-page"} "Enter the Client portal"]]
   [:div [:a {:href "/patient-login"} "Enter the Patient Portal"]]])

(defn patient-login []
  [:div [:h2 "Welcome to Gateway"]
   [:div
    [:div.page-header [:h3 "Patient Login"]]
    
    [text-input :login-recordhash "Login Record Hash"]
    [text-input :login-signature "Login Signature"]]
    
   (if (:saved? @state)
     [:p "Saved"]
     [:button {:type "submit"
               :class "btn btn-default"
               :on-click save-doc}
      "Submit"])
     
   [:div [:a {:href "/"} "Go back to the home page" ]]])

(defn client-page []
  [:div [:a {:href "/"} "Go back to the home page"]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/patient-login" []
  (session/put! :current-page #'patient-login))

(secretary/defroute "/clinic-page" []
  (session/put! :current-page #'client-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
