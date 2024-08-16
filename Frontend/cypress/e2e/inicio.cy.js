/*Atividade 03 e 04*/
// describe('Página Principal', () => {
//   it('Deve renderizar h1 com o texto correto!', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
//   })
// })

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.getByData('vantagens').contains('Vantagens do nosso banco:')
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('vantagem1').contains('Conta e cartão gratuitos')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('vantagem2').contains('Saques sem custo')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('vantagem3').contains('Programa de pontos')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('vantagem4').contains('Seguro Dispositivos')
  })

  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })

  it('Deve renderizar a imagem', () => {
    cy.getByData('image1').should('be.visible')
  })
  it('Deve renderizar a imagem', () => {
    cy.getByData('image2').should('be.visible')
  })
  it('Deve renderizar a imagem', () => {
    cy.getByData('image3').should('be.visible')
  })
  it('Deve renderizar a imagem', () => {
    cy.getByData('image4').should('be.visible')
  })
  it('Deve renderizar a imagem', () => {
    cy.getByData('image5').should('be.visible')
  })

  it('Deve renderizar os elementos div', () => {
    cy.getByData('container').should('be.visible')
    cy.getByData('vantagens_itens').should('be.visible')
    cy.getByData('vantagens_itens2').should('be.visible')
    cy.getByData('vantagens_itens3').should('be.visible')
    cy.getByData('vantagens_itens4').should('be.visible')
    cy.getByData('vantagens_itens5').should('be.visible')
    cy.getByData('container-vantagens').should('be.visible')
    cy.getByData('container').should('be.visible')
  })

})