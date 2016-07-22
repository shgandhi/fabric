(ns gateway.core
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [reagent-modals.modals :as reagent-modals]
              [secretary.core :as secretary :include-macros true]
              [secretary.core :refer [dispatch!]]
              [accountant.core :as accountant]
              [goog.events :as events]
              [goog.history.EventType :as HistoryEventType]
              [gateway.ajax :refer [load-interceptors!]]
              [gateway.pages.home :refer [home-page]]
              [gateway.pages.clinic :refer [clinic-page]]
              [gateway.components.clinic_sidebar :refer [clinic_sidebar]]
              [gateway.pages.clinic_actions.generate :refer [generate]]
              [gateway.pages.clinic_actions.deploy :refer [deploy]]
              [gateway.pages.clinic_actions.link_record :refer [link_record]]
              [gateway.pages.clinic_actions.upload_ehr :refer [upload_ehr]]
              [gateway.pages.clinic_actions.scan :refer [scan]]
              [gateway.pages.clinic_actions.retrieve :refer [retrieve]]
              [gateway.pages.clinic_actions.upload_msg :refer [upload_msg]]
              [gateway.pages.clinic_actions.notify :refer [notify]]
              [gateway.pages.patient :refer [patient-page]]
              [gateway.components.patient_sidebar :refer [patient_sidebar]]
              [gateway.pages.patient_actions.read_trial :refer [read_trial]]
              [gateway.pages.patient_actions.authorize_trial :refer [authorize_trial]]
              [gateway.pages.patient_actions.revoke_trial :refer [revoke_trial]])
    (:import goog.History))

(defn current-page []
  [(session/get :current-page)])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/patient-page" []
  (session/put! :current-page #'patient-page))

(secretary/defroute "/read_trial" []
  (session/put! :current-page #'read_trial))

(secretary/defroute "/authorize_trial" []
  (session/put! :current-page #'authorize_trial))

(secretary/defroute "/revoke_trial" []
  (session/put! :current-page #'revoke_trial))

(secretary/defroute "/clinic-page" []
  (session/put! :current-page #'clinic-page))

(secretary/defroute "/generate" []
  (session/put! :current-page #'generate))

(secretary/defroute "/deploy" []
  (session/put! :current-page #'deploy))

(secretary/defroute "/link_record" []
  (session/put! :current-page #'link_record))

(secretary/defroute "/upload_ehr" []
  (session/put! :current-page #'upload_ehr))

(secretary/defroute "/scan" []
  (session/put! :current-page #'scan))

(secretary/defroute "/retrieve" []
  (session/put! :current-page #'retrieve))

(secretary/defroute "/upload_msg" []
  (session/put! :current-page #'upload_msg))

(secretary/defroute "/notify" []
  (session/put! :current-page #'notify))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render-component [current-page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (hook-browser-navigation!)
  (mount-root))
