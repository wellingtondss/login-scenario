import userData from '../fixtures/userData.json'

describe ('Orange HRM Tests', () => {

const selectorList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCrendentialAlert: "[role='alert']"
}

it('Login - Sucess', () => {

   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get(selectorList.usernameField).type(userData.userSuccess.username)
   cy.get(selectorList.passwordField).type(userData.userSuccess.password)
   cy.get(selectorList.loginButton).click()
   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   cy.get(selectorList.dashboardGrid)
  })

it('Login - Fail', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCrendentialAlert)
   })
})

