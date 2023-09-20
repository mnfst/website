describe('CASE Website', () => {
  it('has content about CRUD apps', () => {
    cy.visit('/')
    cy.contains('CRUD')
  })
})
