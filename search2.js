import SearchOne from './search.one';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I visit the website', () => {
    SearchOne.visit();
    //cy.visit('http://zero.webappsecurity.com/index.html')
})    

When ('I search online word in the feature search', () => {
    SearchOne.input()
    //cy.get('#searchTerm').type('online {enter}')
})
        
Then ('I should show research result page', () => {
    SearchOne.show();
    // cy.get('h2').should('be.visible')
    // cy.contains('Zero - Free Access to Online Banking')
    // cy.contains('Zero - Online Statements')
})