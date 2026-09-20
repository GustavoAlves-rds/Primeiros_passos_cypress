import userData from '../fixtures/userData.json'


const selectorlist = {
  usernameField: '[name="username"]',
  passwordFild: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitle: '.oxd-topbar-header-breadcrumb',
  wrongCredentialAlert: '.oxd-alert-content > .oxd-text'
}

describe('Orange HRM Tests', () => {
  it('Login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location ('pathname').should ('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitle).contains('Dashboard')
  })

   it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordFild).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })



})