/// <reference types="cypress" /> 

describe('Authentication', () => {
    it('success logs in programmatically', () => {
    cy.LoginViaAPI()
    cy.contains('h2', 'Models').should('be.visible')
})
})
