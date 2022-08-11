describe("Index Clients Section", () => {
  it("Has a link to /about", () => {
    cy.viewport(375, 800);
    cy.visit("/fixtures/index/clients");

    cy.contains("About Us").click();
    cy.url().should("contain", "/about");
  });
});
