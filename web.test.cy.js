/// <reference types="cypress" /> 

describe('Visit the website', () => {
    
    before(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
        cy.get('h1').should('be.visible')
        cy.get('h3').should('contain', 'We Care About Your Health')
        cy.get('#menu-toggle').click()
        cy.contains('Login').click()
        cy.url().should('include', '/profile.php#login')
        cy.get('h2').should('contain', 'Login')
    })

    it('Login the website with invalid data & valid data ', () => {
        cy.fixture("user2").then(user => { 
            const user1 = user.user1
            const pass1 = user.pass1
            cy.login1(user1, pass1)
           })
    
        cy.fixture("user2").then(user => { //Login the website with valid data
            const user2 = user.user2
            const pass2 = user.pass2
            cy.login2(user2, pass2)
           })
        
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('[type="checkbox"]').check('Yes')
        cy.get('[type="radio"]').check('Medicaid')
        cy.get('input[name="visit_date"]').type('06/01/2024')
        cy.contains('Comment').click()
        cy.get('textarea').clear()
        cy.get('textarea').type('i will go to appointment has done booked')
        cy.contains('Book Appointment').click()
        cy.get('h2').should('contain', 'Appointment Confirmation')
        cy.url().should('include', '/appointment.php#summary')

        cy.contains('Go to Homepage').click()
        cy.url().should('include', 'https://katalon-demo-cura.herokuapp.com')
        
        cy.get('#menu-toggle').click()
        cy.contains('History').click()
        cy.url().should('include', '/history.php#history')

        cy.get('#menu-toggle').click()
        cy.contains('Profile').click()
        cy.url().should('include', '/profile.php#profile')
        cy.get('.btn-default').click()
        cy.url().should('include', 'https://katalon-demo-cura.herokuapp.com')
 
       })
    })

