describe('Contacts list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Visits the app root and creates a new contact', () => {
    cy.get('[data-cy=initial-add-contacts-btn]').click();
    cy.get('[data-cy=contact-form-name-input]').type('João da Silva');
    cy.get('[data-cy=contact-form-email-input]').type('joao@mail.com');
    cy.get('[data-cy=contact-form-phone-input]').type('95785733954{enter}');

    cy.get('[data-cy=contact-card-name]').should('contain', 'João da Silva');
    cy.get('[data-cy=contact-card-email]').should('contain', 'joao@mail.com');
    cy.get('[data-cy=contact-card-phone]').should('contain', '(95) 78573-3954');
  });
});
