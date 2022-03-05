import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import axios from "axios"

//@IMPROVE: use typescript
When('I fill in DoD info', (dataTable) => {
  //@IMPROVE: use dataTable var
  cy.get("#input-name").type("Long Method")
})