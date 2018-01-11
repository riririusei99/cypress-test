describe('My First Test', function() {
  it("clicking 'type' navigates to a new url", function() {
    cy.visit('http://teamspirit.hatenablog.com/')

    cy.get('input[type=text]').type('riririusei99')
    cy.get('input[type=submit]').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/search?q=riririusei99')
  })
})
