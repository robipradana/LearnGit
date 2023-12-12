/// <reference types="cypress" />

describe ('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

        cy.get('[type="checkbox"]').check()

    });

});