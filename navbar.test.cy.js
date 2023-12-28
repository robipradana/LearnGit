/// <reference types="cypress" /> 

describe('Navbar Test', () =>{
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    //})

    //it('Should display feedback content', () =>{
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('contain', 'Feedback')
    //})

    //it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain', 'Home')
        cy.get('strong').should('contain', 'Online Banking')
        cy.get('strong').should('contain', 'Feedback')
        })
    })