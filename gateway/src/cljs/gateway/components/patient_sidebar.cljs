(ns gateway.components.patient_sidebar
    (:require [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]
              [reagent.session :as session]
              [secretary.core :refer [dispatch!]]))

(defn patient_sidebar []
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
          [:li.active>a {:href "#/patient-page"} [:h5 "Overview"] [:span.sr-only "(current)"]]
          [:li>a {:href "#/read_trial"} [:h5 "Read Trial Registry"]]
          [:li>a {:href "#/authorize_trial"} [:h5 "Authorize Trial"]]
          [:li>a {:href "#/revoke_trial"} [:h5 "Revoke Trial"]]]
        ]
      [:div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main
        [:h1.page-header "Patient Dashboard"]]]]])
