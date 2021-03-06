(ns gateway.pages.clinic_actions.retrieve
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [reagent-modals.modals :as reagent-modals]
              [gateway.components.clinic_sidebar :refer [clinic_sidebar]]))

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

(defn hash-input
  [hash-atom]
  (input-and-prompt "Record Hash" 
                    :text 
                    :patient.recordHash 
                    hash-atom
                    [prompt-message "Enter the hash of your EHR"]
                    true))
;; -------------------------
;; Views

(defn retrieve []
  (let [record-hash (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic_sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Retrieve EHR"]][:hr]
                [:div.dashboard-content-body
                  [:form [hash-input record-hash] 
                    ]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    {:type "submit"}  [:a {:href (str "http://localhost:8080/ipfs/" @record-hash) :download "proposed_file_name"} "Download"]]]]]]])))
