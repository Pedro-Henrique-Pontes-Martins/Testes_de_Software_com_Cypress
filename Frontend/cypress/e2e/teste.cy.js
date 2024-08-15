//Testa o caminho
/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
}) */

//Testa o testo das vantagens
// describe('Página Principal', () => {
//   it('Deve renderizar h1 com o texto correto!', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
//     cy.get('[data-test="vantagens"]').contains('Vantagens do nosso banco:')
//   })
// })


//Testa se possui um h1 com o texto especificado
// describe('Página Principal', () => {
//   it('passes', () => {
//     cy.visit('localhost:3000')
//     cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
//   })
// }) 

//Testa se o elemento com o data-test especificado possui o texto correto
describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})





