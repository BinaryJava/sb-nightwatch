class SharedPageObject {
    navigateToFactorialPage () {
      browser.navigateTo('https://qainterview.pythonanywhere.com/');
    }

    textContains (element, text, timeout) {
      browser.expect.element(element).text.to.contain(text).before(timeout)
    }

    select (element) {
      browser.element.find(element).click()
    }

    input (element, text) {
      browser.element.find(element).sendKeys(text);
    }

    clearValue (element) {
      browser.element.find(element).clear()
    }

    async getText (element) {
      const textValue = await browser.element.find(element).getText().value
      return textValue
    }

    factorial (integer) {
      let answer = BigInt(1)
      for (let i = BigInt(2); i <= integer; i++) {
        answer *= BigInt(i)
      }
      return Number(answer.toString()).toPrecision()
    }
}

module.exports = SharedPageObject;
