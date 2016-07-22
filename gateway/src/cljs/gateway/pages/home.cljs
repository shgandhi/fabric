(ns gateway.pages.home
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [secretary.core :refer [dispatch!]]
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

(defn hash-input
  [hash-atom]
  (input-and-prompt "Record Hash" 
                    :text 
                    :patient.recordHash 
                    hash-atom
                    [prompt-message "Enter the hash of your EHR"]
                    true))

(defn signature-input
  [sign-atom]
  (input-and-prompt "Signature"
                    :text
                    :patient.signature
                    sign-atom
                    [prompt-message "Enter the signature on your Record hash"]
                    true))
;; -------------------------
;; Views
(defn home-page []
   (let [record-hash (atom nil)
        signature (atom nil)]
    (fn []
      [:div.container-fluid
       [:nav.navbar.navbar-inverse.navbar-fixed-top
          [:div.container-fluid
            [:div.navbar-header [:a.navbar-brand {:href "#"} "IBM Trial Chain"]]
              [:div.collapse.navbar-collapse
                [:ul.nav.navbar-nav.navbar-right
                  [:li>button.btn.btn-default.navbar-btn.navbar-right {:on-click #(dispatch! "/clinic-page")} "Clinic Login"]]
                  [:li>a]
                ]]]
       [:div.container-fluid.login-page 
        [:div.panel.panel-default
          [:div.login-title [:h1 "Patient Login"]][:hr]
            [:div.login-body
              [:form [hash-input record-hash ]
                [signature-input signature]]]
              [:hr]
            [:div.login-footer
              [:button.btn.btn-primary {:type "submit"
                        :on-click #(dispatch! "/patient-page")} "Login"]]]]])))