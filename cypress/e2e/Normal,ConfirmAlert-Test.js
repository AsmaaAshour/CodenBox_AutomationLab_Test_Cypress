///<reference types="Cypress"/>

describe("CodenBox AutomationLab", () => {
  it("normal alert", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");
    cy.get("#alertbtn").click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.eql(
        "Hello , share this practice page who love to learn automation"
      );
    });
  });

  it("confirm alert", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(true);
    });
    cy.get("#confirmbtn").click();
  });
});
