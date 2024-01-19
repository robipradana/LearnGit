describe ('Create New List', () => {
    it('Successfully create new user', () => {
        var user = {
            "name":'Eduwork',
            "job":'Education'
        }
        assert.isObject(user, 'value is object')
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.eq('Eduwork')
            expect(response.body.job).to.eq('Education')
        })
    })
    })
