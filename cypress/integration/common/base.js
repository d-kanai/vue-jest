import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// @IMPROVE: move this file to e2e dir. change path setting

// @IMPROVE: move to helper file
export const http = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 10000,
})

Before(() => {
  http.post('/test/reset')
})

Given('I visit to {string}', (url) => {
  cy.visit(url);
})

Then('I see {string}', (text) => {
  cy.contains(text)
})

And('I click {string}', (text) => {
  cy.contains(text).click()
})

Given('There are DoD items', (dataTable) => {
  dataTable.rawTable.map(name => {
    http.post('/test/dod', {name: name[0]})
  })
})