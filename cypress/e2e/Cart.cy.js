describe('Cart test', () => {
  //visiting the website before each test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

    // Test case for makin sure there are 6 product displayed
    it('Testing if there are 6 products displayed', () => {
      cy.get('.inventory_item').should('have.length', 6)
    })

    // Test case for adding a product to the cart
    it('Testing adding a product to the cart', () => {
      cy.get('.inventory_item').its(0).find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
    })

    // Test case for removing a product from the cart
    it('Testing removing a product from the cart', () => {
      cy.get('.inventory_item').its(0).find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.inventory_item').its(0).find('button').click()
      cy.get('.shopping_cart_badge').should('not.exist')
    })

    //test case for adding multiple products to the cart
    it('Testing adding multiple products to the cart', () => {
      cy.get('.inventory_item').its(0).find('button').click()
      cy.get('.inventory_item').its(1).find('button').click()
      cy.get('.inventory_item').its(2).find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '3')
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
    
  // Test case: checkout with missing information (negative)
it('should display error when required checkout info is missing', () => {
  // Add an item to the cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

  // Navigate to the cart
  cy.get('.shopping_cart_link').click()

  // Start checkout
  cy.get('[data-test="checkout"]').click()

  // Leave the fields empty and try to continue
  cy.get('[data-test="continue"]').click()

  // Assert error message for missing first name
  cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Error: First Name is required')
})

})