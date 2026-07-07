describe('Transferencias', () => {
    it('Deve transferir quando informo dados e valor validos', () => {
        cy.visit(URL)
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        }) 
        cy.contains('button', 'Entrar').click()

    })
})