import {Before, Given, When, Then, And, RunStep} from "cypress-cucumber-preprocessor/steps"
import axios from "axios"

//@IMPROVE: use typescript
When('I fill in DoD info', (dataTable) => {
  //@IMPROVE: use dataTable var
  cy.get("#input-name").type("Long Method")
})

When('I fill in DoD Record info for {string}', (dodName, dataTable) => {
  //@IMPROVE: use dataTable var
  cy.get("#select-dod").select(dodName);
  dataTable.rawTable.map(row => {
    cy.get(`#input-${row[0]}`).type(row[1])
  })
})


Then('I see {string} in DoD Record', (text) => {
  // @IMPROVE: base.jsのstepを使用する（baseにselectorを渡す）
  // RunStep(`I see ${text}`);
  cy.get("#dodRecord").contains(text)
  // cy.reload();
  cy.get("#dodRecord").contains(text)
})