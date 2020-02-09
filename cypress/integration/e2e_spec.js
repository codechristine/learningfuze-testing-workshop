

describe('e2e', () => {
  it('should allow creating a thread and viewing its profile', () => {
    //arrange
    //act
    //assert
    cy.visit('/')
    cy.contains('Add a thread').click()
    cy.contains("Title").click()
    const title = 'My Awesome post ${Date.now()}'
    cy.focused().type(title)
    console.log('it passes')
    cy.contains("Submit").click()
  })
})
