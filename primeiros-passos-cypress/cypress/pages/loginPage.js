class LoginPage {
   selectorlist() {
    const selectors = {
        usernameField: '[name="username"]',
        passwordFild: '[name="password"]',
        loginButton: '.oxd-button',
          wrongCredentialAlert: '.oxd-alert-content > .oxd-text',
    }
      return selectors
   }

acessLoginPage(){
    cy.visit('/auth/login')
}

loginWithUser(username,password){
    cy.get(this.selectorlist().usernameField).type(username)
    cy.get(this.selectorlist().passwordFild).type(password)
    cy.get(this.selectorlist().loginButton).click()
}


}

export default LoginPage