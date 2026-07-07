describe('Login', () => {
  beforeEach(() =>{
  //arrange
    //cy.visit(cy.env('URL')) -->> esta forma forma foi descontinuada
    cy.env(['URL']).then(({ URL }) => {
    cy.visit('/')
    })
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //act
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-no-botao-entrar')

    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //act
    cy.fazerLoginComCredenciaisInvalidas()

    //assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')

  })
})