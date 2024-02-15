class SharedPageObject {
    async navigateToFactorialPage () {
      await browser.navigateTo('https://qainterview.pythonanywhere.com/');
    }

    async select (element) {
      await browser.element.find(element).click()
    }

    async input (element, text) {
      await browser.element.find(element).sendKeys(text);
    }

    async clearValue (element) {
      await browser.element.find(element).clear()
    }

    async getText (element) {
      await browser.element.find(element).getText()
    }

    async factorial (integer) {
      let answer = integer
      for (let i = integer - 1; i > 0; i--) {
        answer = answer * i
      }
      return answer
    }
}

module.exports = SharedPageObject;
