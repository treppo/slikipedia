Feature: Search for articles
  As a user
  I want to search for a term
  So that I can choose from list of Wikipedia articles

  Scenario: Searching for a term
    Given I am on the homepage
    When I enter a term in the search field
    Then I should see a list of articles
