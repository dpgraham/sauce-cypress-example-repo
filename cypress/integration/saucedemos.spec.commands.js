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
    /*cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();*/
    //cy.scrollTo('bottom');

    // Select red t-shirt from inventory
    cy.login();
    //cy.get('.inventory_item:contains("T-Shirt (Red)") .btn_inventory').click();
    cy.selectInventoryItem('T-Shirt (Red)');
    //cy.scrollTo('top');

    // Check out shopping cart
    /*cy.get('#shopping_cart_container a').click();
    cy.get('#cart_contents_container .cart_item').should('have.length', 1);
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('Roger');
    cy.get('#last-name').type('Wilco');
    cy.get('#postal-code').type('12345');
    cy.get('.checkout_buttons .btn_primary').click();*/
    cy.checkOut();
  })
})
