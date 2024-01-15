describe ('Create New List', () => {
    it('Successfully create new user', () => {
        var user = {
            "name":'Eduwork',
            "job":'Education'
        }
        assert.isObject(user, 'value is object')
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
    })
    })
