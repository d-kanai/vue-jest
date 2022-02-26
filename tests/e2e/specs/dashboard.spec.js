
describe("Dashboard", () => {
  it("visit", () => {
    //when
    cy.visit("/");
    //then
    cy.contains("body", "Dashboard");
  });
});
