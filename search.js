const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When ('I search online word in the feature search', () => {
    cy.get('#searchTerm').type('online {enter}')
});

Then ('I should show research result page', () => {
    cy.get('h2').should('be.visible')
    cy.get('a').contains('Zero - Free Access to Online Banking')
    cy.get('a').contains('Zero - Online Statements')
});