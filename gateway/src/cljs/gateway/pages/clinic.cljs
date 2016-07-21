(ns gateway.pages.clinic
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [secretary.core :refer [dispatch!]]
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


(defn clinic-page []
  [:div.container-fluid
    [:div#wrapper
      [clinic_sidebar]
        [:div.row.placeholders
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "#/generate"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}
            ]]
            [:h4 "Create EHR"][:br]
            [:span.text-muted "Generate Record Hash"][:hr]
            [:span.text-muted "Deploy Chaincode"][:hr]
            [:span.text-muted "Invoke Link Record"][:hr]
            [:span.text-muted "Upload EHR to IPFS folder"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "#/scan"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Scan Blockchain"][:br]
            [:span.text-muted "Scan Blockchain"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "#/retrieve"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Retrieve Authorized EHR"][:br]
            [:span.text-muted "Retrieve Authorized EHR"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "#/upload_msg"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Post Message"][:br]
            [:span.text-muted "Upload Message to the IPFS Network"]]]]])
