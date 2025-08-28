describe('Checkout flow test', () => {
  //visiting the website before each test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('Products').should('be.visible')
  })

 it('should complete a checkout successfully', () => {
    // Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')

    // Go to cart
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.contains('Your Cart').should('be.visible')

    // Checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Fill in checkout info
    cy.get('[data-test="firstName"]').type('Yasser')
    cy.get('[data-test="lastName"]').type('Saad')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    // Verify item is in checkout overview
    cy.url().should('include', '/checkout-step-two.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')

    // Finish checkout
    cy.get('[data-test="finish"]').click()

    // Verify success message
    cy.url().should('include', '/checkout-complete.html')
    cy.contains('Thank you for your order!').should('be.visible')
  })
})

  
