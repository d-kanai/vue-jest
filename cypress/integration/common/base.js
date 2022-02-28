import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import axios from "axios"

Given('I visit to {string}', (url) => {
  cy.visit(url);
})

Then('I see {string}', (text) => {
})

Given('There are DoD items', (dataTable) => {
  axios.defaults.baseURL = 'http://localhost:9000';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  dataTable.rawTable.map(name => {
    axios.post('/test/dod', {name: name[0]})
  })
})