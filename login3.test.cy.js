/// <reference types="cypress" /> 

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()     
    })

    it('Should try to login with invalid data', () => {
        cy.fixture("user2").then(user => {
        const userr = user.userr
        const pass = user.pass 
        cy.loginfirst(userr, pass)
       })

        cy.fixture("user2").then(user => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
        })

        cy.contains("username").click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('contain.text', 'Signin')
        })
     })

  