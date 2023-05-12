import DemoBlazePage from "../models/pages/DemoBlazePage";
import { HomePageAPI } from "../support/HomePageAPI";

describe('DemoeBlaze Home Page Test', () => {

    let apiProduct
    beforeEach(() => {
        cy.login()
        cy.visit("https://www.demoblaze.com/");
        HomePageAPI.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to get hero card title', () => {
            cy.login()
            let apiProductData = apiProduct.map(item => {
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