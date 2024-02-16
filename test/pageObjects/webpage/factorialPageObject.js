const SharedPageObject = require('../shared/sharedPageObject.js')

class FactorialPageObject extends SharedPageObject {
  INPUT_BOX = 'input[id="number"]'
  CALCULATE_BUTTON = 'button[id="getFactorial"]'
  FACTORIAL_ANSWER = 'p[id="resultDiv"]'

  async verifyFactorialCalculation (lowerBound, upperBound) {
    const failedValues = []
    for (let inputValue = lowerBound; inputValue <= upperBound; inputValue++) {
      this.input(this.INPUT_BOX, inputValue)
      this.select(this.CALCULATE_BUTTON)
      this.verifyAnswer(inputValue)
      this.clearValue(this.INPUT_BOX)
    }
  }

  verifyAnswer (inputValue) {
    const expectedResult = this.factorial(inputValue)
    this.textContains(this.FACTORIAL_ANSWER, `The factorial of ${inputValue} is: ${expectedResult}`, 1000)
  }
}

module.exports = FactorialPageObject;
