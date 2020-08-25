import { messages } from '../../../../src/validation';

describe('Contacts list', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate contact form', () => {
    cy.get('[data-cy=initial-add-contacts-btn]').click();
    cy.get('[data-cy=save-contact-btn]').should('have.class', 'disabled');

    cy.get('[data-cy=contact-form-email-input] input').type('teste');
    cy.get('[data-cy=contact-form-email-input] .error-message')
      .should('be.visible')
      .should('contain', messages.email);

    cy.get('[data-cy=contact-form-phone-input] input').type('123');
    cy.get('[data-cy=contact-form-phone-input] .error-message')
      .should('be.visible')
      .should('contain', messages.phone);
  });

  it('should create a new contact', () => {
    const NEW_CONTACT = { name: 'João da Silva', email: 'joao@mail.com', phone: '(95) 78573-3954' };

    cy.newContact(NEW_CONTACT);

    cy.get('[data-cy=contact-card-name]').should('contain', NEW_CONTACT.name);
    cy.get('[data-cy=contact-card-email]').should('contain', NEW_CONTACT.email);
    cy.get('[data-cy=contact-card-phone]').should('contain', NEW_CONTACT.phone);
  });

  it('should update a created contact', () => {
    const EDITED_CONTACT = { name: 'João da silva editado', email: 'email@alterado.com', phone: '(11) 1111-1111' };

    cy.newContact({ name: 'João da Silva' });

    cy.get('[data-cy=contact-card-edit-btn]').click();

    cy.get('[data-cy=contact-form-name-input] input')
      .clear()
      .type(EDITED_CONTACT.name);
    cy.get('[data-cy=contact-form-email-input] input')
      .clear()
      .type(EDITED_CONTACT.email);
    cy.get('[data-cy=contact-form-phone-input] input')
      .clear()
      .type(EDITED_CONTACT.phone);

    cy.get('[data-cy=save-contact-btn]').should('not.have.class', 'disabled');
    cy.get('[data-cy=save-contact-btn]').click();
    cy.get('[data-cy=contact-card-name]').should('contain', EDITED_CONTACT.name);
    cy.get('[data-cy=contact-card-email]').should('contain', EDITED_CONTACT.email);
    cy.get('[data-cy=contact-card-phone]').should('contain', EDITED_CONTACT.phone);
  });

  it('should delete a contact', () => {
    cy.newContact({ name: 'João da Silva' });

    cy.get('[data-cy=contact-card-delete-btn]').click();
    cy.get('[data-cy=confirm-contact-delete-btn]').click();

    cy.get('[data-cy=empty-contact-list-div]').should('be.visible');
    cy.get('[data-cy=empty-contact-list-text]').should('contain', 'Nenhum contato adicionado.');
  });

  it('should search a contact', () => {
    const CONTACT_TO_SEARCH = { name: 'João da Silva', email: 'joao@mail.com', phone: '(95) 78573-3954' };
    cy.newContact(CONTACT_TO_SEARCH);
    cy.newContact({ name: 'Fulano da silva' }, 'navbar-add-contacts-btn');
    cy.newContact({ name: 'Fulano JR', email: 'teste@teste.com' }, 'navbar-add-contacts-btn');
    cy.newContact({ phone: '12788793414' }, 'navbar-add-contacts-btn');

    cy.get('[data-cy=search-contacts-input] input').type('Jo');
    cy.get('[data-cy=contact-card]').should('have.length', 1);
    cy.get('[data-cy=contact-card-name]').should('be', CONTACT_TO_SEARCH.name);

    cy.get('[data-cy=search-contacts-input] input')
      .clear()
      .type('mail');
    cy.get('[data-cy=contact-card]').should('have.length', 1);
    cy.get('[data-cy=contact-card-email]').should('be', CONTACT_TO_SEARCH.email);

    cy.get('[data-cy=search-contacts-input] input')
      .clear()
      .type(CONTACT_TO_SEARCH.phone);
    cy.get('[data-cy=contact-card]').should('have.length', 1);
    cy.get('[data-cy=contact-card-phone]').should('be', CONTACT_TO_SEARCH.phone);

    cy.get('[data-cy=search-contacts-input] input')
      .clear()
      .type('fulano');
    cy.get('[data-cy=contact-card]').should('have.length', 2);
  });
});
