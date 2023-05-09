export default class DemoBlazePage {

    _getCardDetails(){
        let cardData = {}
        cy.get('h4').then($title => cardData.itemName = $title.text().trim())
        cy.get('h5').then($price => cardData.itemPrice = $price.text().trim())
        return new Cypress.Promise(resolve => resolve(cardData))
    }

    getAllCardData(){
        let allCartData = [];
        cy.get('.card').each($card => {
            cy.wrap($card).within(() => {
                this._getCardDetails().then(cardData => allCartData.push(cardData))
            })
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allCartData))
        })
    }
}