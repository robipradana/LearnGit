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

Cypress.Commands.add('loginfirst', (userr, pass) => {
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').clear()
    cy.get('#user_login').type(userr)
    cy.get('#user_password').type(pass)
    cy.get('input[name="submit"]').click()
    cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
})

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('input[name="submit"]').click()
    cy.get('h2').should('contain.text', 'Cash Accounts')
})

Cypress.Commands.add('clicklink', (label) => {
    cy.get(a).contains(label).click()
})