describe("Signup feature", () => {
  it("Signup page initial display", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("form#signup")
      .should("be.visible")
      .within(() => {
        cy.get("input").should("have.length", 3);
        cy.get("button[type='submit']")
          .should("be.visible")
          .should("contain.text", "Submit")
          .should("be.disabled");
      });
  });

  it("User with correct information is redirected to success page", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      email: "jamesbond@mi6.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassword",
    };
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();
    cy.url().should("include", "signup/success");
    cy.get("body").should("contain.text", "Signup successful");
  });

  it("User with incorrect information is redirected to failure page", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      email: "jamesbond@mi6.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassord",
    };
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();
    cy.url().should("include", "signup/failure");
    cy.get("body").should("contain.text", "An error occurred");
  });
});
