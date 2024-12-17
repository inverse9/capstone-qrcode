/* eslint-disable no-undef */
describe("Information Page", () => {
  const baseUrl = Cypress.env("baseUrl");
  it("should show information about patung catur muka", () => {
    cy.visit("http://192.168.56.1:5173/scan/1");
    cy.intercept("GET", `${baseUrl}/objects/*`).as("getObject");

    cy.wait("@getObject").then((_) => {
      cy.get("h1").should("be.visible").should("contain", "Patung Catur Muka");
    });
  });

  it("should show error if the object not found", () => {
    cy.visit("http://192.168.56.1:5173/scan/999");
    cy.intercept("GET", `${baseUrl}/objects/*`, {
      statusCode: 404,
      body: { message: "Object not found" },
    }).as("getObject");

    cy.wait("@getObject").then((_) => {
      cy.get("h1")
        .should("be.visible")
        .should("contain", "Objek tidak ditemukan");
    });
  });
});
