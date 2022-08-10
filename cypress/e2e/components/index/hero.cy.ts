describe("Index Hero", () => {
  beforeEach(() => {
    cy.viewport(375, 800);
    cy.visit("/fixtures/index/hero");
  });

  it("Has a CTA", () => {
    cy.get('input[type="email"]').type("me@example.com");
    cy.contains("Schedule a Demo").click();

    cy.viewport(768, 800);

    cy.visit("/fixtures/index/hero");
    cy.get('input[type="email"]').type("me@example.com");
    cy.contains("Schedule a Demo").click();
  });

  it("Has a contact link", () => {
    cy.contains("Contact Us").click();

    cy.url().should("contain", "/contact");
  })
});
