describe('My First Test', function() {
  it("Search riririusei99", function() {
    cy.visit('http://teamspirit.hatenablog.com/')

    cy.get('input[type=text]').type('riririusei99')
    cy.get('input[type=submit]').click()

    // Waits for the title to be 'riririusei99'.
    cy.title().should('include', 'riririusei99')

    cy.title().should('eq', 'riririusei99 の検索結果 - TeamSpirit Developer Blog')
  })
})
