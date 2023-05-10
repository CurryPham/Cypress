import { entries } from "lodash"

export class HomePageAPI {

    static getHomePageProduct() {
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        return cy.get('@entries').then(entries => entries.response.body.Items)
    }
}