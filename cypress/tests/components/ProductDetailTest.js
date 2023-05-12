import { HomePageAPI } from "../../support/HomePageAPI";
import ProductDetailComponent from "../../models/components/ProductDetailComponent";

describe('Product Component Test', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should be able to verify product details', () => {
    HomePageAPI.getHomePageProduct().then(apiData => {
      const ranDomProduct = apiData[Math.floor(Math.random() * apiData.length)];
      const ranDomProductTitle = ranDomProduct.title.trim().replace("\n", "");
      cy.contains(ranDomProductTitle).click();

      const productDetails = new ProductDetailComponent();
      productDetails.getProductImg().should('be.visible');
      productDetails.getProductName().should('be.visible', ranDomProductTitle);
      productDetails.getProductPrice().should('contain.text', ranDomProduct.price);
      productDetails.getProductDescription().should('not.be.empty');
    })
  });
  });