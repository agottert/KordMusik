
describe('My First Test', function (){
  it ('clicks an element', function(){
    cy.visit("http://www.kordmusik.net")
    cy.contains('Bio').click()
    cy.url().should('include', '/bio')
    cy.get('.wrapper_svg')
    

    
  })
})