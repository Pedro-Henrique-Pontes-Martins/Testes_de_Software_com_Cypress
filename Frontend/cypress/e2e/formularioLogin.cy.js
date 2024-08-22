describe('Testando múltiplas páginas', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
    // antes de qualquer teste, é necessário visitar o site da aplicação. Por isto, utilizamos o hook beforeEach
    // PS: NUNCA altere as portas
    })

    it('Não deve permitir um e-mail inválido!', () => {
      cy.getByData('botao-login').click()
      cy.getByData('email-input').type('neilton@alura')
      cy.getByData('senha-input').type('123456')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it.only('Não deve permitir o campo email em branco', () => {
  
    cy.getByData('botao-login').click()
      
    //cy.getByData('email-input').type('neilton@alura.com') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
      
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório') 
    
    /* a mensagem exibida deve ser: "o campo email é obrigatório" */
  
  })

  it.only('Não deve permitir o campo senha em branco', () => {
  
    cy.getByData('botao-login').click()
      
    cy.getByData('email-input').type('neilton@alura.com') 
      
    //cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro2').should('exist').and('have.text', 'O campo de senha é obrigatório') 
    
  })
})

