import {SRHomePage} from "../models/pages/SRHomePage"

describe('SR HomePage Test', () => {
    it('should be able to print all the title', () => {
        cy.visit('https://www.simplyrecipes.com/');
        cy.get('.card__tile').each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim())
        })
    });

    it.only('should be able to interact with a component', () => {
        cy.visit('https://www.simplyrecipes.com/');
        const srHomePage = new SRHomePage();
        srHomePage.heroComponent().cardTitle.each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim())
        })
    });
});