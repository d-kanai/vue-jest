import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I visit to {string}', (url) => {
  cy.visit(url);
})

Then('I see {string}', (text) => {
  cy.contains(text)
})