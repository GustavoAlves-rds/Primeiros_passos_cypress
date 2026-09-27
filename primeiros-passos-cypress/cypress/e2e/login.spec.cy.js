import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()
const dashboadrPage = new DashboardPage()


describe(' Login Orange HRM Tests', () => {
  
   it('Login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkacessInvalid()
  })

   it('Login Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboadrPage.checkDashboarPage()
  })



})