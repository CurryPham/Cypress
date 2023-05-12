describe('Element interaction', () => {
    it('should be able to complete the form', () => {
        cy.visit("/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get("button[type='submit']").click()
        cy.wait(2000)
    });
});
