import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const loginPage = new LoginPage()
const dashboadrPage = new DashboardPage()
const manuPage = new MenuPage()
const myInfo = new MyInfoPage()
const chance = new Chance();

describe('Orange HRM Tests', () => {
  it('User Infop Update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboadrPage.checkDashboarPage()
    manuPage.accessMyInfo()
    myInfo.fillPersonalDetails(chance.first(),chance.last())
    myInfo.fillPersonalEmployee('31231321','31231321','121212121','2026-07-29')
    myInfo.saveForm()
  
    //cy.get(selectorlist.usernameField).type()
    //cy.get(selectorlist.passwordFild).type(userData.userSuccess.password)
    //cy.get(selectorlist.loginButton).click()
    //cy.location ('pathname').should ('equal','/web/index.php/dashboard/index')
    //cy.get(selectorlist.sectionTitle).contains('Dashboard')
    //cy.get(selectorlist.myInfoButton).click()
    //
    //cy.get(selectorlist.EmployeeID).eq(4).clear().type('0320354')
    //cy.get(selectorlist.otherID).eq(5).clear().type('0321')
    //cy.get(selectorlist.driverLicense).eq(6).clear().type('0322')
    //cy.get(selectorlist.dateField).eq(0).clear().type('2026-01-01')
    //cy.get(selectorlist.dataCloseButton).click()
    //cy.get(selectorlist.genderButton).eq(0).click()
    //cy.get(selectorlist.saveButton).eq(0).click() 
    //cy.get('body').should('contain','Successfully Updated')
  })

})