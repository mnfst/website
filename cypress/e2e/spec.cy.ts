describe('CASE Website', () => {
  it('has content about CRUD apps', () => {
    cy.visit('/')
    cy.contains('CRUD')
  })

  it('has a link to the GitHub repo', () => {
    cy.visit('/')
    cy.contains('GitHub').should('have.attr', 'href').and('include', 'github')
  })

  it('has a link to the documentation', () => {
    cy.visit('/')
    cy.contains('Get started')
      .should('have.attr', 'href')
      .and('include', 'https://docs.case.app')
  })

  it('has a FAQ page', () => {
    cy.visit('/faq')
    cy.contains('FAQ')
  })
})
