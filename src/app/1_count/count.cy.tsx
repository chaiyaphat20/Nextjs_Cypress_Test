import Home from "../page";

describe("<Home/>", () => {
  beforeEach(() => {
    cy.mount(<Home />);
  })

  it("It renders Component", () => {
    cy.get('[data-testid="value-count"]').should("be.visible");
    cy.get('[data-testid="btn-click"]').should("be.visible");
  });

  it('should increase count on button click', () => {
    cy.get('[data-testid="value-count"]').should('have.text', '0')

    cy.get('[data-testid="btn-click"]').click()

    cy.get('[data-testid="value-count"]').should('have.text', '1')

    cy.get('[data-testid="btn-click"]').click()

    cy.get('[data-testid="value-count"]').should('have.text', '2')
  })
});
