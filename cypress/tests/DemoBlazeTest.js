import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "./product.json"

describe('SR HomePage', () => {

    it('should be able to get hero card title', () => {
        cy.visit("https://www.demoblaze.com/");
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(allCarData))
                expect(allCardData).to.be.deep.eq(products);
            })
        })
    });
});