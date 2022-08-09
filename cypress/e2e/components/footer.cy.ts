describe("Footer component", () => {
  function testNav() {
    cy.contains("PayAPI").click();
    cy.url().should("match", /\/$/);
    cy.go(-1);

    cy.contains("Pricing").click();
    cy.url().should("contain", "/pricing");
    cy.go(-1);

    cy.contains("About").click();
    cy.url().should("contain", "/about");
    cy.go(-1);

    cy.contains("Contact").click();
    cy.url().should("contain", "/contact");
    cy.go(-1);
  }

  function testSocial() {
    cy.contains("Visit Facebook Page").click();
    cy.contains("Visit Twitter Page").click();
    cy.contains("Visit LinkedIn Page").click();
  }

  it("Has visible navigation", () => {
    cy.viewport(375, 800);
    cy.visit("/fixtures/footer");
    testNav();

    cy.viewport(768, 800);
    cy.visit("/fixtures/footer");
    testNav();

    cy.viewport(1440, 800);
    cy.visit("/fixtures/footer");
    testNav();
  });

  it("Has visible social links", () => {
    cy.viewport(375, 800);
    cy.visit("/fixtures/footer");
    testSocial();

    cy.viewport(768, 800);
    cy.visit("/fixtures/footer");
    testSocial();

    cy.viewport(1440, 800);
    cy.visit("/fixtures/footer");
    testSocial();
  });
});

export {};
