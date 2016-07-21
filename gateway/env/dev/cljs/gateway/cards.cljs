(ns gateway.cards
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [gateway.core :as core]
            [gateway.util :as util]
            )
  (:require-macros
   [devcards.core
    :as dc
    :refer [defcard defcard-doc defcard-rg deftest]]
   [cljs.test :refer [is testing are]]
   ))

(defcard "# Devcards for trial-chain")

#_(defcard-rg home-page-card
  [core/home-page])

#_(defcard-rg trial-hash-card
  [core/trial-hash-window])

(defcard-rg sidebar-card
  [core/sidebar])

#_(defcard-rg patient-actions-card
  [core/patient-actions "test"])

(defcard-rg util-card
  [util/foo-cljc "test"])

;this is how you do a unit-test card
(deftest test-card
  (testing "has-number?"
    (is (= (core/has-number? "32") true) "32 is a number")))

(reagent/render [:div] (.getElementById js/document "app"))

;; remember to run 'lein figwheel devcards' and then browse to
;; http://localhost:3449/cards
