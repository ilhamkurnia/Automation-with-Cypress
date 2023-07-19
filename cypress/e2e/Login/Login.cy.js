import { LoginPage } from "../../page-objects/LoginPage"
import { Utils } from "../../page-objects/Utils"

describe('feature Login', () => {
    const loginPage = new LoginPage()
    const utils = new Utils()

    beforeEach(() => {
        loginPage.navigate()
    })

    it('Empty Username & Password', () => {

        loginPage.buttonLogin()

        utils.wait()

        loginPage.validateUsername('Required')

        loginPage.validateUsername('Required')
    })

    
    it('Valid Username & Password', () => {
        loginPage.login()
    })
})