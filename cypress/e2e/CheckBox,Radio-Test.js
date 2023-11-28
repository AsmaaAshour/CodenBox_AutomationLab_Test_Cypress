///<reference types="Cypress"/>

describe("CodenBox AutomationLab", () => {
  it("check-box", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");
    //single check
    //cy.get("#checkBoxOption1").check()
    //cy.get("#checkBoxOption3").click()

    //check all
    //cy.get('input[type="checkbox"]').check()

    //specfic check
    //cy.get('input[type="checkbox"]').check(["option1","option2"])

    //check by index
    //cy.get('input[type="checkbox"]').eq(1).check()

    //check by first or last
    //cy.get('input[type="checkbox"]').first().check()
    cy.get('input[type="checkbox"]').last().check();
  });

  it("radio", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    //single check
    cy.get("input[value='radio1']").click();

    //check by index
    //cy.get('input[type="radio"]').eq(1).click()

    //check by first or last
    //cy.get('input[type="radio"]').first().check()
    //cy.get('input[type="radio"]').last().check()
  });
});
