(ns gateway.components.clinic_sidebar
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [secretary.core :refer [dispatch!]]
              [reagent-modals.modals :as reagent-modals]))

(defn clinic_sidebar []
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
          [:li.active>a {:href "#/clinic-page"} [:h5 "Overview"] [:span.sr-only "(current)"]]
          [:li>a {:href "#/generate"} [:h5 "Generate Record Hash"]]
          [:li>a {:href "#/deploy"} [:h5 "Deploy Chaincode"]]
          [:li>a {:href "#/link_record"} [:h5 "Invoke Link Record"]]
          [:li>a {:href "#/upload_ehr"} [:h5 "Upload EHR to IPFS"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "#/scan"} [:h5 "Scan Blockchain"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "#/retrieve"} [:h5 "Retrieve EHR"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "#/upload_msg"} [:h5 "Upload Message to IPFS"]]]
        [:ul.nav.nav-sidebar
          [:li>a {:href "#/notify"} [:h5 "Notify Patient"]]]
        ]
      [:div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main
        [:h1.page-header "Clinic Dashboard"]]]]])
