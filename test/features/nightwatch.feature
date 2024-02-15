Feature: Factorial calculator

@test
Scenario: Test the numbers 10 to 100 in the factorial calculator
  Given I open the factorial calculator page
  Then I calculate all the factorials between "10" and "100"
