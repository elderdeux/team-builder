/// <reference types="cypress" />

describe("Test Form", function () {
    this.beforeEach(() => {
        cy.visit("localhost:3000/");
    });

    it("Form creates a team member", () => {
        const nameInput = cy.get(":nth-child(1) > input");
        nameInput.type("test name");
        nameInput.should("have.value", "test name");

        const emailInput = cy.get(":nth-child(2) > input");
        emailInput.type("test@test.com");
        emailInput.should("have.value", "test@test.com");

        const roleInput = cy.get(":nth-child(3) > input");
        roleInput.type("developer");
        roleInput.should("have.value", "developer");

        cy.contains("Submit").click();

        const teamMembers = cy.get(".movie-list");

        teamMembers.should("have.length", 1);

        cy.get(".movie-list > div > :nth-child(1)").should(
            "contain.text",
            "test name"
        );

        cy.get(".movie-list > div > :nth-child(2)").should(
            "contain.text",
            "test@test.com"
        );

        cy.get(".movie-list > div > :nth-child(3)").should(
            "contain.text",
            "developer"
        );
    });
});