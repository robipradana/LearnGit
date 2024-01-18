describe ('Validate Header', () => {
    it('Successfully validated content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon') 
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.equal('limber')
            expect(response.body.abilities[0].ability.url).to.equal('https://pokeapi.co/api/v2/ability/7/')
            expect(response.body.abilities[0].is_hidden).to.equal(false)
            expect(response.body.abilities[0].slot).to.equal(1)
            })
        })
    })
