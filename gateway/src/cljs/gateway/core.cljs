(ns gateway.core
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [reagent-modals.modals :as reagent-modals]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;;-------------------------
;; Helpers

(defn row [label input]
  [:div.row
   [:div.col-md-10 [:label label]]
   [:div.col-md-10 input]])

;;Input validation
(defn check-nil-then-predicate
  "Check if the value is nil, then apply the predicate"
  [value predicate]
  (if (nil? value)
    false
    (predicate value)))


(defn eight-or-more-characters?
  [word]
  (check-nil-then-predicate word (fn [arg] (> (count arg) 7))))


(defn has-special-character?
  [word]
  (check-nil-then-predicate word (fn [arg] (boolean (first (re-seq #"\W+" arg))))))


(defn has-number?
  [word]
  (check-nil-then-predicate word (fn [arg] (boolean (re-seq #"\d+" arg)))))
  
;;-----

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
                    [prompt-message "Enter the signature on your EHR hash"]
                    true))

(defn read-trial-input
  [trial-atom]
  (input-and-prompt "Trial Description Hash"
                    :text
                    :trial.hash
                    trial-atom
                    [prompt-message ""]
                    false))

(defn clinic-pubkey-input
  [clinic-atom]
  (input-and-prompt "Clinic Public Key"
                    :text
                    :trial.hash
                    clinic-atom
                    [prompt-message "Enter the Clinic Public Key for the Clinic to authorize/revoke"]
                    true))
  
(defn trial-hash-window []
  (let [trial-hash (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Enter Trial Description Hash to Query clinics"]] 
        [:div.modal-body
         [:form [read-trial-input trial-hash]]]
        [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "View All Ongoing Trials"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]]
      )))

(defn authorize-window []
  (let [clinic-pub-key (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Authorize Trial on your EHR"]] 
            [:div.modal-body
            [:form [clinic-pubkey-input clinic-pub-key]]]
      [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "Authorize"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]])))

(defn revoke-window []
  (let [clinic-pub-key (atom nil)] 
    (fn [] 
      [:div.modal-content
        [:div.modal-header [:h4 "Revoke Trial on your EHR"]] 
            [:div.modal-body
            [:form [clinic-pubkey-input clinic-pub-key]]]
      [:div.modal-footer
        [:button.btn.btn-primary 
          [:a {:href "#"} "Revoke"]]
        [:button.btn.btn-default [:data-dismiss.modal "Close"]]]])))

(defn sidebar []
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

;; -------------------------
;; Views

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
          [sidebar]
      ]])))

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
                  [:li>button.btn.btn-default.navbar-btn.navbar-right [:a {:href "/clinic-page"} "Clinic Login"]]
                  [:li>a]
                ]]]]
       [:div.container-fluid.login-page 
        [:div.panel.panel-default
          [:div.login-title [:h1 "Patient Login"]][:hr]
            [:div.login-body
              [:form [hash-input record-hash ]
                [signature-input signature]]]
              [:hr]
            [:div.login-footer
              [:button.btn.btn-primary
                [:a {:href "/patient-actions"} "Login"]]]]]])))

(defn client-page []
;;Navbar
   [:div.container-fluid
      [:nav.navbar.navbar-default.navbar-fixed-top
        [:div.container-fluid
          [:div.navbar-header [:a.navbar-brand {:href "#"} "IBM Trial Chain"]]
            [:div.collapse.navbar-collapse
              [:ul.nav.navbar-nav.navbar-right
                [:li>a {:href "/#"} "Launch"]
                [:li>a {:href "/#"} "Update"]
                [:li>a {:href "/#"} "Consent"]]
          ]]]
    ;;Sidebar
      [:div.container-fluid 
        [:div.row 
          [:div.col-sm-3.col-md-2.sidebar 
            [:ul.nav.nav-sidebar
              [:li.active>a {:href "#"} "Overview" [:span.sr-only "(current)"]]
              [:li>a {:href "#"} "Reports"]
              [:li>a {:href "#"} "Analytics"]
              [:li>a {:href "#"} "Export"]]
            [:ul.nav.nav-sidebar
              [:li>a {:href ""} "Nav Item Again"]
              [:li>a {:href ""} "Nav Item Again"]
              [:li>a {:href ""} "Nav Item Again"]]
            [:ul.nav.nav-sidebar
              [:li>a {:href ""} "Nav Item"]
              [:li>a {:href ""} "Nav Item"]
              [:li>a {:href ""} "Nav Item"]]]
          [:div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main
            [:h1.page-header "Clinic Dashboard"]
   ]]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/patient-actions" []
  (session/put! :current-page #'patient-actions))

(secretary/defroute "/clinic-page" []
  (session/put! :current-page #'client-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render-component [current-page] (.getElementById js/document "app")))

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
