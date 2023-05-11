import { entries } from "lodash"

export class HomePageAPI {

    static getHomePageProduct() {
        this._waitForHomePageLoaded();
        return cy.get('@entries').then(entries => entries.response.body.Items)
    }

    static waitForHomePageLoaded(){
        this._waitForHomePageLoaded();
    }

    static _waitForHomePageLoaded(){
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
    }
}