(ns gateway.cards
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [gateway.core :as core]
            [gateway.util :as util]
            [gateway.pages.patient :as patient]
            [gateway.pages.home :as home]
            )
  (:require-macros
   [devcards.core
    :as dc
    :refer [defcard defcard-doc defcard-rg deftest]]
   [cljs.test :refer [is testing are]]
   ))

(defcard "# Devcards for trial-chain")

(defcard-rg hash-input-card
  [home/hash-input (atom nil)])

(defn has-number? [s]
  (some number? s))

;this is how you do a unit-test card
(deftest test-card
  (testing "has-number?"
    (is (= (has-number? ["a" 32]) true) "Collection contains a number")))


(reagent/render [:div] (.getElementById js/document "app"))

;; remember to run 'lein figwheel devcards' and then browse to
;; http://localhost:3449/cards
