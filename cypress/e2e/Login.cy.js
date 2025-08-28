describe('Login test', () => {
  //visiting the website before each test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // Test case for login with valid credentials
  it('Testing login with valid credntials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('Products').should('be.visible')
  })

   // Test login with invalid credentials
  it('should display error for invalid credentials', () => {
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match')
  })

 //  Test login with empty fields
  it('should display error when fields are empty', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required')
  })
})