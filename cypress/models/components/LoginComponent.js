export default class HeaderComponent {
    getLoginModal = () => cy.get('#logInModal form')
    getUsername = () => cy.get('#loginusername')
    getPassword = () => cy.get('#loginpassword')
    getLoginBtn = () => cy.get('[onclick="logIn()"]')

    
}