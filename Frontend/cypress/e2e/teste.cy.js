/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
}) */

describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.get('[data-test="vantagens"]').contains('Vantagens do nosso banco:')
  })
})