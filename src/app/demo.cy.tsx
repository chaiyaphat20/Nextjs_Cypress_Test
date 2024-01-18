import Home from "./page";

describe("<Home/>", () => {
  it("renders", () => {
    cy.mount(<Home />);
    cy.get('[data-testId="title"]').should("be.visible");
    cy.get('[data-testId="title2"]').should("be.visible");
  });
});
