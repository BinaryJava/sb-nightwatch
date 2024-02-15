# sb-nightwatch
Sample automation suite for Swissborg

{
  "name": "sb-nightwatch",
  "version": "1.0.0",
  "description": "Sample automation suite for Swissborg",
  "scripts": {
    "test": "npx nightwatch --require cucumber.conf.js --format json:report/cucumber_report.json --reporter=json && npm run generate_report",
    "generate_report": "node utils/report.js"
  },
  "author": "Kieran Marriott",
  "license": "ISC",
  "devDependencies": {
    "@cucumber/cucumber": "^10.3.1",
    "multiple-cucumber-html-reporter": "^3.6.2",
    "nightwatch": "^3.4.0"
  }
}
