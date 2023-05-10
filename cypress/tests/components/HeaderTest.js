import HeaderComponent from "../../models/components/HeaderComponent";

describe('Header Component Test', () => {
    
    const BRAND_TEXT = 'PRODUCT STORE'
    let headerComp;
    beforeEach(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
    })

    it('Test for brand logo', () => {
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)
        headerComp.brandLogoImg().should('be.visible')
    });
    
    it('Test for header menu', () => {
        const expectedMenuDetails = [
            {
              "text": "Home (current)",
              "href": "index.html"
            },
            {
              "text": "Contact",
              "href": "#"
            },
            {
              "text": "About us",
              "href": "#"
            },
            {
              "text": "Cart",
              "href": "cart.html"
            },
            {
              "text": "Log in",
              "href": "#"
            },
            {
              "text": "Sign up",
              "href": "#"
            }]
        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                expect(actualMenuDetails).to.be.deep.equal(expectedMenuDetails);
            })
        })
        })
    });