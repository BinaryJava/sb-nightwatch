const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./report/",
  reportPath: "./tests_output/",
  });
