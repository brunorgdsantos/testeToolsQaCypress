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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("fillsForm", data => {
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#userEmail").type(data.email);
    cy.get(".custom-control-label").click({ multiple: true });
    cy.get("#userNumber").type(data.mobile);
    cy.get("#subjectsContainer").type(data.subjects);
    const fixtureFile = 'myPhoto2021.jpeg';
    cy.get("#uploadPicture").attachFile(fixtureFile);
    cy.get("#currentAddress").type(data.address);
    cy.get("#state").type(data.state);
    cy.get("#city").type(data.city);
    cy.get("#submit").click();
});