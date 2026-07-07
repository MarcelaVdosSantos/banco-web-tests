describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        // a função de selecionar esta no arquivo common.js
        //cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem') //apelido campo conta origem
        //cy.get('@campo-conta-origem').click()
        //cy.get('@campo-conta-origem').contains('Maria Oliveira com saldo de R$').click()
       
        //cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino') //apelido campo conta destino
        //cy.get('@campo-conta-destino').click()
        //cy.get('@campo-conta-destino').contains('João da Silva com saldo de R$').click()

        //Act
        //cy.selecionarOpcaoNaCombobox('conta-origem', 'Maria') -- função arquivo transferências
        //cy.selecionarOpcaoNaCombobox('conta-destino', 'João')
        //cy.get('#valor').click().type('11')
        //cy.contains('button', 'Transferir').click()

        cy.realizarTransferencias('Maria', 'João', '11')
        //Assert    
        cy.verificarMensagemNoToast('Transferência realizada!')
        //cy.get('.toast').should('have.text', 'Transferência realizada!')

    })

       it('Deve apresentar erro quando tentar transferir mais de R$5000 sem o token ', () => {
        //Act
        //cy.selecionarOpcaoNaCombobox('conta-origem', 'Maria')
        //cy.selecionarOpcaoNaCombobox('conta-destino', 'João')
        //cy.get('#valor').click().type('6000')
        //cy.contains('button', 'Transferir').click()

        cy.realizarTransferencias('Maria', 'João', '6000')
      
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})