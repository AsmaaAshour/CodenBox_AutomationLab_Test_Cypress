///<reference types="Cypress"/>

describe("CodenBox AutomationLab", () => {
  it("dropdown(static)", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    //select using value
    //cy.get("#dropdown-class-example").select("option3")

    //select using index
    //cy.get("#dropdown-class-example").select(1)

    //select using name
    cy.get("#dropdown-class-example").select("Appium");
  });

  it("dropdown(dynamic)", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    cy.get("#autocomplete").type("Hu");
    cy.get("#ui-id-1").should("be.visible");
    cy.get("#ui-id-1").contains("Hungary").click();
  });
});
