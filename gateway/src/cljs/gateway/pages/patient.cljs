(ns gateway.pages.patient
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [gateway.components.patient_sidebar :refer [patient_sidebar]]
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

;; -------------------------
;; Views

(defn patient-page []
  [:div.container-fluid
    [:div#wrapper
      [patient_sidebar]
        [:div.row.placeholders
            [:div.col-xs-6.col-sm-3.placeholder
              [:a {:href "#/read_trial"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}
              ]]
              [:h4 "View Trials"][:br]
              [:span.text-muted "View Specific Trial"][:hr]
              [:span.text-muted "View All Trials"][:hr]
            ]
            [:div.col-xs-6.col-sm-3.placeholder
              [:a {:href "#/authorize_trial"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
              [:h4 "Authorize Trial"][:br]
              [:span.text-muted "Authorize Trial"]
            ]
            [:div.col-xs-6.col-sm-3.placeholder
              [:a {:href "#/revoke_trial"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
              [:h4 "Revoke Trial"][:br]
              [:span.text-muted "Revoke Trial"]
            ]]]])