import { entries } from "lodash";
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

    it.only('should be able to get hero card title', () => {
        cy.visit("https://www.demoblaze.com/");
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then(entries => {
            let apiProductData = entries.response.body.Items
            apiProductData = apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(() => {
                    expect(allCardData).to.be.deep.eq(apiProductData);
                })
            })
        })
    });
});