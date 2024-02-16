const {Given, Then, When} = require('@cucumber/cucumber');

const SharedPageObject = require('../pageObjects/shared/sharedPageObject.js')
const FactorialPageObject = require('../pageObjects/webpage/factorialPageObject.js')

const sharedPageObject = new SharedPageObject()
const factorialPageObject = new FactorialPageObject()

Given('I open the factorial calculator page', () => {
  sharedPageObject.navigateToFactorialPage()
})

Then('I calculate all the factorials between {string} and {string}', (lowerBound, upperBound) => {
  factorialPageObject.verifyFactorialCalculation(lowerBound, upperBound)
})

