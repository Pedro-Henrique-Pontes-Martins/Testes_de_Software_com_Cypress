/*Atividade 03 e 04*/
// describe('Página Principal', () => {
//   it('Deve renderizar h1 com o texto correto!', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
//   })
// })

/*Atividade 05*/
// describe('Página Principal', () => {
//   beforeEach( () => {
//     cy.visit('http://localhost:3000/')
//   })
//   it('Deve renderizar h1 com o texto correto!', () => {
//     cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
//   })
//   it('Deve renderizar h2 com o texto correto!', () => {
//     cy.getByData('vantagens').contains('Vantagens do nosso banco:')
//   })
  

//   it('Deve renderizar h3 com o texto correto!', () => {
//     cy.getByData('vantagem1').contains('Conta e cartão gratuitos')
//   })
//   it('Deve renderizar h3 com o texto correto!', () => {
//     cy.getByData('vantagem2').contains('Saques sem custo')
//   })
//   it('Deve renderizar h3 com o texto correto!', () => {
//     cy.getByData('vantagem3').contains('Programa de pontos')
//   })
//   it('Deve renderizar h3 com o texto correto!', () => {
//     cy.getByData('vantagem4').contains('Seguro Dispositivos')
//   })


//   it('Deve renderizar p com o texto correto!', () => {
//     cy.getByData('paragrafo1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
//   })
//   it('Deve renderizar p com o texto correto!', () => {
//     cy.getByData('paragrafo2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
//   })
//   it('Deve renderizar p com o texto correto!', () => {
//     cy.getByData('paragrafo3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
//   })
//   it('Deve renderizar p com o texto correto!', () => {
//     cy.getByData('paragrafo4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
//   })
// })

/*atividade 06*/
describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar h1 com o texto correto!', () => {
    cy.verifyByData('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.verifyByData('vantagens', 'Vantagens do nosso banco:')
  })


  it('Deve renderizar os h3 com os textos corretos!', () => {
    cy.verifyByData('vantagem1', 'Conta e cartão gratuitos')
    cy.verifyByData('vantagem2','Saques sem custo')
    cy.verifyByData('vantagem3', 'Programa de pontos')
    cy.getByData('vantagem4', 'Seguro Dispositivos')
  })


  it('Deve renderizar os p com os textos corretos!', () => {
    cy.verifyByData('paragrafo1', 'Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.verifyByData('paragrafo2', 'Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.verifyByData('paragrafo3', 'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.verifyByData('paragrafo4', 'Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})