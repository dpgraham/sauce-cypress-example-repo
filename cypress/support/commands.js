// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Cypress.Commands.


Cypress.Commands.add("login", function (username="standard_user", password="secret_sauce") {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

// select an inventory item that contains the provided text
Cypress.Commands.add("selectInventoryItem", function (text) {
    cy.get(`.inventory_item:contains("${text}") .btn_inventory`).click();
});

Cypress.Commands.add("checkOut", function (username="Roger", lastName="Wilco", zipCode="12345") {
    cy.get('#shopping_cart_container a').click();
    cy.get('#cart_contents_container .cart_item').should('have.length', 1);
    cy.get('.checkout_button').click();
    cy.get('#first-name').type(username);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(zipCode);
    cy.get('.checkout_buttons .btn_primary').click();
});