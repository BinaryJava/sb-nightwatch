const {Given, Then, When} = require('@cucumber/cucumber');

const SharedPageObject = require('../pageObjects/shared/sharedPageObject.js')
const FactorialPageObject = require('../pageObjects/webpage/factorialPageObject.js')

const sharedPageObject = new SharedPageObject()
const factorialPageObject = new FactorialPageObject()

Given('I open the factorial calculator page', async () => {
  await sharedPageObject.navigateToFactorialPage()
})

Then('I calculate all the factorials between {string} and {string}', async (lowerBound, upperBound) => {
  await factorialPageObject.verifyFactorialCalculation(lowerBound, upperBound)
})

