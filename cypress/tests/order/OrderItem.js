import { HomePageAPI } from "../../support/HomePageAPI";
import LoginComponent from "../../models/components/LoginComponent";
import HeaderComponent from "../../models/components/HeaderComponent";


describe('Product Component Test', () => {
  let headerComp;
  let loginComp;
  beforeEach(() => {
    cy.visit('/');
    headerComp = new HeaderComponent();
    loginComp = new LoginComponent();
  })
  
  const login = (username, password) => {
    headerComp.getLoginLink().click({force: true});
    loginComp.getLoginModal().should('be.visible')
    loginComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
    loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
    loginComp.getLoginBtn().click({force: true});
  }

  it('oder item as guest', () => {
    purchaseItem();
  });
  
    it('oder item as user', () => {
      const LOGIN_CRED = {
        username: "tun", 
        password: "admin"
      }
      const {username, password} = LOGIN_CRED;
      login(username, password);
      purchaseItem();
    });
  });


  const purchaseItem = () => {
    HomePageAPI.getHomePageProduct().then(apiData => {
      const ranDomProduct = apiData[Math.floor(Math.random() * apiData.length)];
      const ranDomProductTitle = ranDomProduct.title.trim().replace("\n", "");
      cy.contains(ranDomProductTitle).click();

      // CLick on add to cart button
      cy.contains('Add to cart').click();

      // Go to cart
      cy.get('#cartur').click();

      // Place order
      cy.contains('Place Order').click();

      // Place order drtails
      cy.get('#name').type('Tun');
      cy.get('#country').type('Vietnam');
      cy.get('#city').type('HCM');
      cy.get('#card').type('123456789');
      cy.get('#month').type('02');
      cy.get('#year').type('09');
      cy.contains('Purchase').click();

      // Verify 
      cy.get('.sweet-alert h2').should('have.text', 'Thank you for your purchase!')
      cy.get('.sweet-alert .lead').then($confirmOrderDetails => {
        cy.wrap($confirmOrderDetails).should('contain.text', ranDomProduct.price)
        cy.wrap($confirmOrderDetails).should('contain.text', 'Card Number: 123456789')
      })
    })
  }