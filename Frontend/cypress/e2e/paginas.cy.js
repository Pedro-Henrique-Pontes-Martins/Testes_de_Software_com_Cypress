describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página de início', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('nova-transacao').should('exist').and('have.text', 'Nova Transação')

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home')
    })

  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home')

    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home/cartoes')
  })

  it('Deve conseguir acessar a página de serviços', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home')

    cy.getByData('app-home').find('a').eq(2).click()
    cy.getByData('servicos').contains('Pix')

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home/servicos')
  })

  it('Deve conseguir acessar a página de investimentos', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home')
    
    cy.getByData('app-home').find('a').eq(3).click()
    cy.getByData('investimentos').contains('Investimentos')

    /*Adicione a seguinte linha no seu código:*/
    cy.location('pathname').should('eq','/home/investimentos')
  })
})