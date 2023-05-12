const DROPDOWN_SEL = "select[id='dropdown']";

describe('Dropdown handling', () => {
    it('should be able to select dropdown option', () => {
        // Visit the page
        cy.visit("/dropdown");
        
        // Select by insex | Select Option 1
        cy.get(DROPDOWN_SEL).select(1);
        
        // Select by value | Select Option 2
        cy.get(DROPDOWN_SEL).select("2");
        
        // Select by visivle text | Select Option 1
        cy.get(DROPDOWN_SEL).select("Option 1");
        
        // Select the selected option is now Option 1
        cy.get("select option:selected").invoke("text").should("eq", "Option 1");
    });
});