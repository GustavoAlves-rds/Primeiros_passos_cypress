import userData from '../fixtures/userData.json'


const selectorlist = {
  usernameField: '[name="username"]',
  passwordFild: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitle: '.oxd-topbar-header-breadcrumb',
  wrongCredentialAlert: '.oxd-alert-content > .oxd-text',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firtNameFiled: "[name='firstName']",
  lastNameFild: "[name='lastName']",
  EmployeeID: ".oxd-input",
  otherID: ".oxd-input",
  driverLicense: ".oxd-input",
  licenseExpiry:".oxd-input",
  dateField: "[placeholder='yyyy-dd-mm']",
  dataCloseButton: ".--close",
  genderButton: ".oxd-radio-input",
  saveButton: ".oxd-button--secondary"



}

describe('Orange HRM Tests', () => {
  it.only('User Infop Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location ('pathname').should ('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitle).contains('Dashboard')
    cy.get(selectorlist.myInfoButton).click()
    cy.get(selectorlist.firtNameFiled).clear().type('Gustavo')
    cy.get(selectorlist.lastNameFild).clear().type('Rodrigues')
    cy.get(selectorlist.EmployeeID).eq(4).clear().type('0320354')
    cy.get(selectorlist.otherID).eq(5).clear().type('0321')
    cy.get(selectorlist.driverLicense).eq(6).clear().type('0322')
    cy.get(selectorlist.dateField).eq(0).clear().type('2026-01-01')
    cy.get(selectorlist.dataCloseButton).click()
    cy.get(selectorlist.genderButton).eq(0).click()
    cy.get(selectorlist.saveButton).eq(0).click() 
    cy.get('body').should('contain','Successfully Updated')
  })


   it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordFild).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })



})