describe("Contact Page", () => {
  it("Can send the contact form", () => {
    cy.visit("/contact");

    cy.get('[name="name"]').type("A Person");
    cy.get('[name="email"]').type("me@example.com");
    cy.get('[name="company"]').type("A Company");
    cy.get('[name="title"]').type("Some Message");
    cy.get('[name="message"]').type("Hello,{enter}This is a message.");
    cy.get('[name="ml-optin"]').click();

    cy.contains("Submit").click();
  });

  
});
