const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';
const TEXT1 = 'Zero - Free Access to Online Banking';
const TEXT2 = 'Zero - Online Statements';


class SearchOne {
    static visit() {
         cy.visit(URL);
     }
    static input() {
         cy.get(SEARCH).type('online {enter}');
     }
     static show() {
        cy.get('h2').should('be.visible')
        cy.contains(TEXT1);
        cy.contains(TEXT2);
     }
}

export default SearchOne;
