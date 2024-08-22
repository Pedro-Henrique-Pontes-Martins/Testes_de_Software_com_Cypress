describe('Formulário cadastro', () => {
  beforeEach(()=> {
  cy.visit('http://localhost:3000')
  })
  
  it('Usuário deve conseguir se cadastrar com sucesso', () => {
  cy.getByData('botao-cadastro').click() /* testaremos agora o botão 'cadastrar' */
  cy.getByData('nome-input').type('Jose da Silva')
  cy.getByData('email-input').type('ze5@email.com')
  /*O email deve ser trocado toda vez que um usuário é cadastrado*/


  cy.getByData('senha-input').type('456789')
  cy.getByData('botao-enviar').click()
  cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
  
  /* a mensagem exibida deve ser: "Usuário cadastrado com sucesso!" */
  
  /* clicamos no botão cadastro e inserimos os dados de cadastro para testar o cenário feliz, onde o cadastro
  
  será realizado com sucesso. */
  
  })

  it('Não deve permitir o campo email em branco', () => {
  
    cy.getByData('botao-cadastro').click()
      
    //cy.getByData('email-input').type('neilton@alura.com') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
    
    cy.getByData('senha-input').type('123456')
    cy.getByData('nome-input').type('Pedro Henrique')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!') 
  
  })

  it('Não deve permitir o campo Nome em branco', () => {
  
    cy.getByData('botao-cadastro').click()
      
    cy.getByData('email-input').type('neilton2@alura.com') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
    
    cy.getByData('senha-input').type('123456')
    //cy.getByData('nome-input').type('Pedro Henrique')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório') 
  
  })

})