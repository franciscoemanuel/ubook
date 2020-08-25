Cypress.Commands.add('newContact', ({ name, email, phone }, btn = 'initial-add-contacts-btn') => {
  const HIGHLIGHT_COLOR = 'rgb(255, 243, 242)';

  cy.get(`[data-cy=${btn}]`).should('be.visible');
  cy.get(`[data-cy=${btn}]`).click();
  name && cy.get('[data-cy=contact-form-name-input]').type(name);
  email && cy.get('[data-cy=contact-form-email-input]').type(email);
  phone && cy.get('[data-cy=contact-form-phone-input]').type(phone);

  cy.get('[data-cy=save-contact-btn]').should('not.have.class', 'disabled');
  cy.get('[data-cy=save-contact-btn]').click();

  cy.get('[data-cy=contact-card]').should('have.css', 'background-color', HIGHLIGHT_COLOR);
});
