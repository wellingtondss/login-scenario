import userData from '../fixtures/userData.json'

describe ('Orange HRM Tests', () => {

const selectorList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCrendentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
}

it.only('User Info Update - Sucess', () => {

   cy.visit('/auth/login')
   cy.get(selectorList.usernameField).type(userData.userSuccess.username)
   cy.get(selectorList.passwordField).type(userData.userSuccess.password)
   cy.get(selectorList.loginButton).click()
   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   cy.get(selectorList.dashboardGrid)
   cy.get(selectorList.myInfoButton).click
  })

it('Login - Fail', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCrendentialAlert)
   })
})

