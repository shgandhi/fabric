(ns gateway.pages.patient_actions.read_trial
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [reagent-modals.modals :as reagent-modals]
              [gateway.components.patient_sidebar :refer [patient_sidebar]]))

;;-------------------------
;; Helpers

(defn row [label input]
  [:div.row
   [:div.col-md-10 [:label label]]
   [:div.col-md-10 input]])

(defn input [label type id value in-focus]
  (row label 
    [:input.form-control 
      {:field type 
       :id id 
       :value @value
       :on-change #(reset! value(-> % .-target .-value))
       ;; Below we change the state of in-focus
       :on-focus #(swap! in-focus not)
       :on-blur #(swap! in-focus not)}]))

(defn input-and-prompt
  "Creates an input box and a prompt box that appears above the input when the input comes into focus."
  [input-label input-type id input-arg prompt-element required?]
  (let [input-focus (atom false)]
    (fn []
      [:div
       (if @input-focus prompt-element [:div])
       [input input-label input-type id input-arg input-focus]
       (if (and required? (= "" @input-arg))
         [:div "Field is required!"]
         [:div])
         ])))

(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:div {:class "my-messages"}
    [:div {:class "prompt message-animation"} [:p message]]])

(defn read-trial-input
  [trial-atom]
  (input-and-prompt "Trial Description Hash"
                    :text
                    :trial.hash
                    trial-atom
                    [prompt-message ""]
                    false))

;; -------------------------
;; Views

(defn read_trial []
  (let [trial-hash (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [patient_sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Enter Trial Description Hash to Query clinics"]][:hr]
                [:div.dashboard-content-body
                  [:form [read-trial-input trial-hash]]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:p.tpbutton.btn-toolbar.text-center
                    [:a.btn.navbar-btn.btn-primary.pull-left {:href "#"} "View Trial"]
                    [:a.btn.navbar-btn.btn-default.pull-right  {:href "#"} "View All Ongoing Trials"]]]]]]])))