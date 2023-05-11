export default class HeaderComponent {
    getSignUpModal = () => cy.get('.modal-dialog form')
    getUsername = () => cy.get('#sign-username')
    getPassword = () => cy.get('#sign-password')
    getSignUpBtn = () => cy.get('[onclick="register()"]')

    
}