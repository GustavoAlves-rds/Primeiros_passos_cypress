const selectorlist = {
  usernameField: '[name="username"]',
  passwordFild: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitle: '.oxd-topbar-header-breadcrumb',
  wrongCredentialAlert: '.oxd-alert-content > .oxd-text'
}


describe('Orange HRM Tests', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('ADMIN')
    cy.get(selectorlist.passwordFild).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location ('pathname').should ('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitle).contains('Dashboard')
  })

   it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('Teste')
    cy.get(selectorlist.passwordFild).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
   
  })



})