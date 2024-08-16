// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cria o comando getByData, que permite acessar um elemento pelo seu seletor sem colocar o termo 'data-test'*/

/*atividade 05*/
Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})

/*atividade 06*/
Cypress.Commands.add('verifyByData', (seletor, text) => {
    return cy.get(`[data-test=${seletor}]`).contains(text)
})

Cypress.Commands.add('verifyBeVisible', (seletor) => {
    return cy.get(`[data-test=${seletor}]`).should('be.visible')
})