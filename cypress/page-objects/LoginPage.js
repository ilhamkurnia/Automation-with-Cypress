export class LoginPage {
    navigate () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    InputUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }

    InputPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }

    buttonLogin(){
        cy.get('.oxd-button').click()
    }


    validateUsername (expectedText) {
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', expectedText)
    }

    validatePassword (expectedText) {
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', expectedText)
    }

    validateAfterLogin(expectedText){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', expectedText)
    }
}