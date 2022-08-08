describe("Header Component", () => {
  it("Has a desktop-view navigation", () => {
    cy.visit("/fixtures/header");

    cy.get("#mobile-nav").should("be.hidden");

    cy.contains("Pricing").click();
    cy.url().should("contain", "/pricing");
    cy.go(-1);

    cy.contains("About").click();
    cy.url().should("contain", "/about");
    cy.go(-1);

    cy.contains("Contact").click();
    cy.url().should("contain", "/contact");
    cy.go(-1);

    cy.contains("Schedule a Demo").click();
    cy.url().should("contain", "/contact");
    cy.go(-1);
  });

  it("Has a mobile-view navigation", () => {
    cy.viewport(375, 800);
    cy.visit("/fixtures/header");

    cy.get(".mobile-nav-scrim").should("have.css", "pointer-events", "none");
    cy.get(".slide-out-content").should("not.be.visible");

    cy.contains("Open Menu").click();
    cy.get(".mobile-nav-scrim").should("have.css", "pointer-events", "all");
    cy.get(".slide-out-content").should("be.visible");

    cy.contains("Close Menu").click();
    cy.get(".mobile-nav-scrim").should("have.css", "pointer-events", "none");
    cy.get(".slide-out-content").should("not.be.visible");

    cy.contains("Open Menu").click();
    cy.get(".mobile-nav-scrim").click({ force: true });
    cy.get(".mobile-nav-scrim").should("have.css", "pointer-events", "none");
    cy.get(".slide-out-content").should("not.be.visible");

    cy.contains("Open Menu").click();

    cy.get("#mobile-nav").contains("Pricing").click();
    cy.url().should("contain", "/pricing");
    cy.go(-1);

    cy.contains("Open Menu").click();
    cy.get("#mobile-nav").contains("About").click();
    cy.url().should("contain", "/about");
    cy.go(-1);

    cy.contains("Open Menu").click();
    cy.get("#mobile-nav").contains("Contact").click();
    cy.url().should("contain", "/contact");
    cy.go(-1);

    cy.contains("Open Menu").click();
    cy.get("#mobile-nav").contains("Schedule a Demo").click();
    cy.url().should("contain", "/contact");
    cy.go(-1);
  });
});
