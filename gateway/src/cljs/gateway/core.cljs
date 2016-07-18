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
                    :trial.clinic
                    clinic-atom
                    [prompt-message "Enter the Clinic Public Key for the Clinic to authorize/revoke"]
                    true))

(defn patient-pubkey-input
  [patient-atom]
  (input-and-prompt "Patient Public Key"
                    :text
                    :trial.patient
                    patient-atom
                    [prompt-message "Enter the Patient Public Key"]
                    true))

(defn ehr-file
  [ehr-atom]
  (input-and-prompt "Upload EHR File"
                    :file
                    :trial.ehr
                    ehr-atom
                    [prompt-message ""]
                    true))

(defn message-input
  [ehr-atom]
  (input-and-prompt "Message Text"
                    :file
                    :trial.ehr
                    ehr-atom
                    [prompt-message ""]
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
          [:a {:href "#"} "View Trial"]]
        [:button.btn.btn-default 
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
  
(defn clinic-sidebar []
 [:div.container-fluid
  [:nav.navbar.navbar-inverse.navbar-fixed-top
    [:div.container-fluid
      [:div.navbar-header [:a.navbar-brand {:href "/#"} "IBM Trial Chain"]]
        [:div.collapse.navbar-collapse
          [:ul.nav.navbar-nav.navbar-right
            [:li>button.btn.btn-default.navbar-btn.navbar-right [:a {:href "/"} "Logout"]]
            [:li>a]]
      ]]]
      ;;Sidebar
  [:div.container-fluid 
    [:div.row 
      [:div.col-sm-3.col-md-2.sidebar 
        [:ul.nav.nav-sidebar
          [:li.active>a {:href "/clinic-page"} [:h5 "Overview"] [:span.sr-only "(current)"]]
          [:li>a {:href "/generate"} [:h5 "Generate Record Hash"]]
          [:li>a {:href "/deploy"} [:h5 "Deploy Chaincode"]]
          [:li>a {:href "/link_record"} [:h5 "Invoke Link Record"]]
          [:li>a {:href "/upload_ehr"} [:h5 "Upload EHR to IPFS"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "/scan"} [:h5 "Scan Blockchain"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "/retrieve"} [:h5 "Retrieve EHR"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "/upload_msg"} [:h5 "Upload Message to IPFS"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "/notify"} [:h5 "Notify Patient"]]]
        ]
      [:div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main
        [:h1.page-header "Clinic Dashboard"]]]]])

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
  [:div.container-fluid
    [:div#wrapper
      [clinic-sidebar]
        [:div.row.placeholders
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "/generate"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}
            ]]
            [:h4 "Create EHR"][:br]
            [:span.text-muted "Generate Record Hash"][:hr]
            [:span.text-muted "Deploy Chaincode"][:hr]
            [:span.text-muted "Invoke Link Record"][:hr]
            [:span.text-muted "Upload EHR to IPFS folder"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "/scan"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Scan Blockchain"][:br]
            [:span.text-muted "Scan Blockchain"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "/retrieve"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Retrieve Authorized EHR"][:br]
            [:span.text-muted "Retrieve Authorized EHR"]
          ]
          [:div.col-xs-6.col-sm-3.placeholder
            [:a {:href "/upload_msg"} [:img.img-responsive {:src "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", :width "200", :height "200"}]]
            [:h4 "Post Message"][:br]
            [:span.text-muted "Upload Message to the IPFS Network"]]]]])

(defn generate []
  (let [ehr-name (atom nil)
        patient-pubkey (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Generate Record Hash"]][:hr]
                [:div.dashboard-content-body
                  [:form [ehr-file ehr-name ] [:span.button.btn.btn-default.upload_ehr_btn "upload"] 
                    [patient-pubkey-input patient-pubkey]]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/deploy"} "Generate"]]]]]]])))

(defn deploy []
  (let [record-hash (atom nil)
        patient-pubkey (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Deploy Chaincode"]][:hr]
                [:div.dashboard-content-body
                  [:form [hash-input record-hash]
                    [patient-pubkey-input patient-pubkey]]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/link_record"} "Deploy"]]]]]]])))

(defn link-record []
  (let [record-hash (atom nil)
        patient-pubkey (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Invoke Link Record on Chaincode"]][:hr]
                [:div.dashboard-content-body
                  [:form [hash-input record-hash]
                    [patient-pubkey-input patient-pubkey]]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/upload_ehr"} "Link Record"]]]]]]])))

(defn upload-ehr []
  (let [ehr-name (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Upload EHR to IPFS"]][:hr]
                [:div.dashboard-content-body
                  [:form [ehr-file ehr-name ] 
                    ]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/clinic-page"} "Upload"]]]]]]])))

(defn scan []
   (let [clinic-pub-key (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Scan Blockchain"]][:hr]
                [:div.dashboard-content-body
                  [:form [clinic-pubkey-input clinic-pub-key] 
                    ]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/clinic-page"} "Scan"]]]]]]])))

(defn retrieve []
  (let [record-hash (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Retrieve EHR"]][:hr]
                [:div.dashboard-content-body
                  [:form [hash-input record-hash] 
                    ]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/clinic-page"} "Download"]]]]]]])))

(defn upload-message []
  (let [message (atom nil)
    patient-pubkey (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Retrieve EHR"]][:hr]
                [:div.dashboard-content-body
                  [:form [message-input message] 
                    [patient-pubkey-input patient-pubkey]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/clinic-page"} "Upload"]]]]]]]])))

(defn notify []
  (let [message (atom nil)
    record-hash (atom nil)]
    (fn []
      [:div.container-fluid
        [:div#wrapper
          [clinic-sidebar]
          [:div.container-fluid.dashboard-content 
            [:div.panel.panel-default
              [:div.dashboard-content-title [:h1 "Notify Patient"]][:hr]
                [:div.dashboard-content-body
                  [:form [message-input message] 
                    [hash-input record-hash]]
                  [:hr]
                [:div.dashboard-content-footer
                  [:button.btn.btn-primary
                    [:a {:href "/clinic-page"} "Notify"]]]]]]]])))

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

(secretary/defroute "/generate" []
  (session/put! :current-page #'generate))

(secretary/defroute "/deploy" []
  (session/put! :current-page #'deploy))

(secretary/defroute "/link_record" []
  (session/put! :current-page #'link-record))

(secretary/defroute "/upload_ehr" []
  (session/put! :current-page #'upload-ehr))

(secretary/defroute "/scan" []
  (session/put! :current-page #'scan))

(secretary/defroute "/retrieve" []
  (session/put! :current-page #'retrieve))

(secretary/defroute "/upload_msg" []
  (session/put! :current-page #'upload-message))

(secretary/defroute "/notify" []
  (session/put! :current-page #'notify))
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
