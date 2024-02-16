# sb-nightwatch

Sample automation suite

## Prerequisities

1. Run `npm install` to install all required packages

## Please note

- Nightwatch JS doesn't currently support HTML reporting with the Cucumber framework, I have instead chosen to generate a JSON report and parse this using the `multiple-cucumber-html-reporter` library. 

- I have included the flag of `--reporter=json` but currently this does nothing, instead it prevents output of the broken HTML report. This flag generates the JSON report `--format json:report/cucumber_report.json`

- If a test fails, the terminal will hang and the Chrome window will not be closed down, use `ctrl + c` to kill the terminal window and close Chrome

## Commands

| Command    | Description                                 |
| ---------- | --------------------------------------------|
| `npm test` | Executes the test for factorial calculation |
