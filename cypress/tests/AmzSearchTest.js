import AmazonHomePage from "../models/pages/AmazonHomePage";
import AmazonSearchResultPage from "../models/pages/AmazonSearchResultPage";

describe('Amz search', () => {
    
    it('should be able to search dining table', () => {
        const SEARCH_TEXT = "Dinning table";

        cy.visit("/");
        let amzHomePage = new AmazonHomePage();
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchTxtBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemElemList.should("not.have.length", 0);
    });
});