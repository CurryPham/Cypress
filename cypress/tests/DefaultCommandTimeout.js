describe('Exploring default command time out', () => {
    it('should be able to apply custom default timeout', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("abc")
        cy.get("#taolao2").type("abc")
    });
});