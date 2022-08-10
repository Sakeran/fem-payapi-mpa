describe("CTAField component", () => {
  it("can accept an email address", () => {
    cy.viewport(375, 800);

    cy.visit("/fixtures/cta-field");
    cy.get("label").should("contain", "Enter email address");
    cy.get('input[type="email"]').type("me@example.com");
    cy.contains("Schedule a Demo").click();

    cy.viewport(768, 800);

    cy.visit("/fixtures/cta-field");
    cy.get('input[type="email"]').type("me@example.com");
    cy.contains("Schedule a Demo").click();
  });
});
