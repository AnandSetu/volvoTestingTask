# used same test case for parallel execution
@test
Feature: To verify volvo home page validation

   Scenario: To validate volvo home page
      Given I launch volvo web portal
      When I click on accept cookie button in home page
      Then I verify volvo logo in home page
      Then I verify Safety label in home page
      Then I verify Volvo Cars has been a leader text under overview tab
