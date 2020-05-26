describe('Note app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Superuser',
            username: 'root',
            password: 'sekret'
        }
        cy.request('POST', 'http://localhost:3001/api/users', user)
        cy.visit('http://localhost:3000')
    })

    it('login fails with wrong password', function() {
        cy.contains('login').click()
        cy.get('#username').type('root')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()

        cy.get('.error').contains('wrong credentials')
        cy.get('.error').should('contain', 'wrong credentials')
        cy.contains('wrong credentials')
        cy.get('.error').should('contain', 'wrong credentials')
        //cy.get('.error').should('have.css', 'rgb(255, 0, 0')
        cy.get('.error').should('have.css', 'border-style', 'solid')
        cy.get('html').should('not.contain', 'Superuser logged in')
    })

    it('front page can be opened', function() {
        cy.contains('Notes')
        cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
    })

    it('login form can be opened', function() {
        cy.contains('login').click()
    })

    it('user can login', function() {
        cy.contains('login').click()
        cy.get('#username').type('root')
        cy.get('#password').type('sekret')
        cy.get('#login-button').click()

        cy.contains('Superuser logged in')
    })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({username: 'root', password: 'sekret'})
        })

        it('a new note can be created', function() {
            cy.contains('new note').click()
            cy.get('input').type('a note created by cypress')
            cy.contains('save').click()
            cy.contains('a note created by cypress')
        })

        describe('and a note exists', function() {
            beforeEach(function () {
                cy.createNote({
                    content: 'another note cypress',
                    important: false
                })
            })

            it('it can be made important', function() {
                cy.contains('another note cypress').parent().find('button').click()
                cy.contains('another note cypress').parent().find('button')
                    .should('contain', 'make not important')
            })
        })

        describe('and several notes exist', function () {
            beforeEach(function() {
                cy.createNote({ content: 'first note', important: false})
                cy.createNote({ content: 'second note', important: false})
                cy.createNote({ content: 'third note', important: false})
            })

            it('one of these can be made important', function() {
                cy.contains('second note').parent().find('button').as('theButton')
                cy.get('@theButton').click()
                cy.get('@theButton').should('contain', 'make not important')
            })
            it('then example', function() {
                cy.get('button').then(buttons => {
                    console.log('number of buttons ', buttons.length)
                    cy.wrap(buttons[0]).click()
                })
            })
        })
    })
})
