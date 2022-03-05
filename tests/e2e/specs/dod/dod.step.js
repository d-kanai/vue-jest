import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import axios from "axios"

When('I fill in DoD info', (dataTable) => {
  cy.get("#input-name").type("Long Method")
})