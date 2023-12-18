/// <reference types="cypress" />

describe ('Test Website Saucedemo', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)

            cy.get('#pay_bills_tab').click()
            
            cy.get('#sp_payee').select('bofa')
            cy.get('#sp_account').select('5')

            cy.get('input[name="amount"]').clear()
            cy.get('input[name="amount"]').type('50')

            cy.get('input[name="date"]').clear()
            cy.get('input[name="date"]').type('2023-12-18')

            cy.get('input[name="description"]').clear()
            cy.get('input[name="description"]').type('buy house',)

            cy.get('#pay_saved_payees').click().should('have.value', 'Pay')
            cy.get('.alert-success').should('contain.text', 'The payment was successfully submitted.')
  })

});

});