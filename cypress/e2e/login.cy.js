describe('Orange HRM Tests', () => {

const selectorList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCrentialAlert: "[role='alert']"
}

  it('Login - Sucess', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get(selectorList.usernameField).type('Admin')
   cy.get(selectorList.passwordField).type('admin123')
   cy.get(selectorList.loginButton).click()
   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('teste')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get("role='alert']")
   })
})