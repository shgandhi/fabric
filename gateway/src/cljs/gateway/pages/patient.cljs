(ns gateway.pages.patient
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [reagent-modals.modals :as reagent-modals]))

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

(defn trial-pubkey-input
  [trial-key-atom]
  (input-and-prompt "Trial Public Key"
                    :text
                    :trial.clinic
                    trial-key-atom
                    [prompt-message "Enter the Clinic Public Key for the Clinic to authorize/revoke"]
                    true))

(defn read-trial-input
  [trial-atom]
  (input-and-prompt "Trial Description Hash"
                    :text
                    :trial.hash
                    trial-atom
                    [prompt-message ""]
                    false))
;; --------------------------
;; Action windows

(defn trial-hash-window []
  (let [trial-hash (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Enter Trial Description Hash to Query clinics"]] 
        [:div.modal-body
         [:form [read-trial-input trial-hash]]]
        [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "View Trial"]]
        [:button.btn.btn-default 
          [:a {:href "#"} "View All Ongoing Trials"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]]
      )))

(defn authorize-window []
  (let [trial-pub-key (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Authorize Trial on your EHR"]] 
            [:div.modal-body
            [:form [trial-pubkey-input trial-pub-key]]]
      [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "Authorize"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]])))

(defn revoke-window []
  (let [trial-pub-key (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Revoke Trial on your EHR"]] 
            [:div.modal-body
            [:form [trial-pubkey-input trial-pub-key]]]
      [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "Revoke"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]])))

;; -------------------------
;; Views

(defn action-select []
  [:div [:h1 "Patient Portal"]
  [:br]
  [:div [:h3 "Select one of the actions from below"]]
  [:br]
  [:div#sidebar-wrapper
  [:div 
    [reagent-modals/modal-window]
   [:ul.nav.navbar-default 
    [:li>a {:on-click #(reagent-modals/modal! [trial-hash-window])} "Read Trial Registry"]
    [:li>a {:on-click #(reagent-modals/modal! [authorize-window])}  "Authorize Record"]
    [:li>a {:on-click #(reagent-modals/modal! [revoke-window])}  "Revoke Authorization"]
    [:li>a {:href "/#"} "Logout"]]]]])

(defn patient-actions [recordHash]
  (let [record-hash (atom nil)
        signature (atom nil)]
    (fn []
      [:div.container-fluid
       [:nav.navbar.navbar-inverse.navbar-fixed-top
          [:div.container-fluid
            [:div.navbar-header [:a.navbar-brand {:href "#"} "IBM Trial Chain"]]
              [:div.collapse.navbar-collapse
                [:ul.nav.navbar-nav.navbar-right
                  [:li>button.btn.btn-default.navbar-btn.navbar-right [:a {:href "/"} "Logout"]]
                  [:li>a]
                ]]]]
        [:div#wrapper.patient-actions
          [action-select]
      ]])))
