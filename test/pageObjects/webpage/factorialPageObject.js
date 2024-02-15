const SharedPageObject = require('../shared/sharedPageObject.js')

class FactorialPageObject extends SharedPageObject {
  INPUT_BOX = 'input[id="number"]'
  CALCULATE_BUTTON = 'button[id="getFactorial"]'
  FACTORIAL_ANSWER = 'p[id="resultDiv"]'

  async verifyFactorialCalculation (lowerBound, upperBound) {
    for (let inputValue = lowerBound; inputValue <= upperBound; inputValue++) {
      await this.input(this.INPUT_BOX, inputValue)
      await this.select(this.CALCULATE_BUTTON)
      await this.verifyAnswer(inputValue)
      await this.clearValue(this.INPUT_BOX)
    }
  }

  async verifyAnswer (inputValue) {
    const expectedResult = await this.factorial(inputValue)
    await browser.assert.textEquals(this.FACTORIAL_ANSWER, `The factorial of ${inputValue} is: ${expectedResult}`)
  }
}

module.exports = FactorialPageObject;
