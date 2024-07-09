#To run test case - use this cmd - npx wdio --spec .\tests\features\volvoHomePage.feature
@test
Feature: To verify volvo home page validation

   Scenario: To validate volvo home page
      Given I launch volvo web portal
      When I click on accept cookie button in home page
      Then I verify volvo logo in home page
      Then I verify Safety label in home page
      Then I verify Volvo Cars has been a leader text under overview tab
