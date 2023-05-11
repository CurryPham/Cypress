import DemoBlazePage from "../../models/pages/DemoBlazePage";
import FooterComponent from "../../models/pages/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";

describe('Home Page Category Test', () => {
  beforeEach(() => {
    cy.visit('/');
    HomePageAPI.waitForHomePageLoaded();
  })

  function verifyCategoryFilterBy(productName) {
    cy.intercept('/bycat').as('cats')
    cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force: true});
    cy.wait('@cats')
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/bycat",
      body: {
        cat: `${productName}`
      }
    }).then(res => {
      let apiProductData = res.body.Items.map(item => {
        return {
          itemName: item.title.replace('\n', ''),
          itemPrice: `$${item.price}`
        }
      })
      new DemoBlazePage().getAllCardData().then(allCartData => {
        cy.log(JSON.stringify(allCartData));
        cy.log(JSON.stringify(apiProductData));
        cy.wrap('').then(() => {
          expect(allCartData).to.be.eql(apiProductData);
        })
      })
    })
  }

  const SCENARIOS = ["phone", "notebook", "monitor"];
  SCENARIOS.forEach(product => {
    it(`Should be able to filter ${product} products`, () => {
      verifyCategoryFilterBy(`${product}`);
    });
  });
  });