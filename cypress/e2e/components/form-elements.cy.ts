describe("Form Elements", () => {
  beforeEach(() => {
    cy.visit("/fixtures/form-elements");
  });

  it("Can correctly enter text", () => {
    cy.get('[type="text"]').as("text-input").type("My Name");

    cy.get("@text-input").parent().get("p").should("not.be.visible");
  });

  it("Can show an error on empty text input blur", () => {
    cy.get('[type="text"]').as("text-input").focus().blur();

    cy.get("@text-input")
      .parent()
      .contains("This field can't be empty")
      .should("be.visible");
  });

  it("Can correctly enter an email", () => {
    cy.get('[type="email"]').as("email-input").type("hi@example.com");

    cy.get("@email-input").parent().get("p").should("not.be.visible");
  });

  it("Can show an error on empty email input blur", () => {
    cy.get('[type="email"]').as("email-input").focus().blur();

    cy.get("@email-input")
      .parent()
      .contains("This field can't be empty")
      .should("be.visible");
  });

  it("Can show an error on invalid email inputs", () => {
    cy.get('[type="email"]').as("email-input").type("invalidemail");

    cy.get("@email-input")
      .parent()
      .contains("Enter a valid email address")
      .should("be.visible");
  });

  it("Can correctly enter into a text area", () => {
    cy.get("textarea").as("text-area").type("Hello,{enter}This is a message.");

    cy.get("@text-area").parent().get("p").should("not.be.visible");
  });

  it("Can show an error on empty textarea blur", () => {
    cy.get("textarea").as("text-area").focus().blur();

    cy.get("@text-area")
      .parent()
      .contains("Please enter a message")
      .should("be.visible");
  });

  it("Can check the checkbox", () => {
    cy.contains("Stay up-to-date").click();
    cy.get('[type="checkbox"]').should("be.checked");

    cy.contains("Stay up-to-date").click();
    cy.get('[type="checkbox"]').should("not.be.checked");

    cy.get('[type="checkbox"]').click().should("be.checked");
    cy.get('[type="checkbox"]').click().should("not.be.checked");
  });
});
