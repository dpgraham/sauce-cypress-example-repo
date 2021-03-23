/// <reference types="cypress" />

context('SauceDemos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('should add a red t-shirt to the shopping cart and then check it out', () => {
    // https://on.cypress.io/scrollTo

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // Log in
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Select red t-shirt from inventory
    cy.get(`.inventory_item:contains("T-Shirt (Red)") .btn_inventory`).click();

    // Open shopping cart
    cy.get('#shopping_cart_container a').click();

    // Get cart items and check length is 1
    cy.get('#cart_contents_container .cart_item').should('have.length', 1);

    // Checkout shopping cart
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('Roger');
    cy.get('#last-name').type('Wilco');
    cy.get('#postal-code').type('12345');
    cy.get('.checkout_buttons .btn_primary').click();

    // Click the finish button
    cy.get('.cart_button').click();

    // Open shopping cart
    cy.get('#shopping_cart_container a').click();

    // Get cart items and check length is 1
    cy.get('#cart_contents_container .cart_item').should('have.length', 0);
  })
})
