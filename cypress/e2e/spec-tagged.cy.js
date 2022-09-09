describe("tagged spec", { tags: "@tagged" }, () => {
  it("tagged test", () => {
    cy.log("tagged test");
  });
});
