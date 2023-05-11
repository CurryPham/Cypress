import HeaderComponent from "../../models/components/HeaderComponent";
import SignUpComponent from "../../models/components/SignUpComponent";

const generateRandomwuser = usernameLeght => {
    const ALL_CHARS = "ABCDÈGHUHJLMNOPQRSTUVwYZabcdrfghịklmnopqrstuvwxyz0123456789"
    const ALL_CHARS_LENGTH = ALL_CHARS.length;
    let randomUsername = '';
    for (let index = 0; index < ALL_CHARS_LENGTH; index++) {
        randomUsername += ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS_LENGTH))
        
    }
        return randomUsername;
}

const SIGN_UP_CRED = {
    username: generateRandomwuser(9), 
    password: "admin"
}
describe('Sign Up Test', () => {
    let headerComp;
    let signUpComp;
    beforeEach(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
        signUpComp = new SignUpComponent();
    })

    const signUp = (username, password) => {
        headerComp.getSignUpLink().click({force: true});
        signUpComp.getSignUpModal().should('be.visible')
        signUpComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
        signUpComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        signUpComp.getSignUpBtn().click({force: true});
    }

    it('should be able to create a new user', () => {
        const {username, password} = SIGN_UP_CRED;
        signUp(username, password);
        cy.on('window:alert', alert => {
            expect(alert).to.contains("Sign up successful.")
        })
    });

    it('should be able to see existing user', () => {
        const {password} = SIGN_UP_CRED;
        signUp("tun", password)
        cy.on('window:alert', alert => {
            expect(alert).to.contains("This user already exist.")
        })
    });
});