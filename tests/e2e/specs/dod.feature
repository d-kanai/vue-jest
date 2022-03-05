Feature: DoD

  @focus
  Scenario: Show list of DoD items
    Given There are DoD items
      |Long Method|
      |Coverage|
    When I visit to "/"
    And I click "DoD"
    Then I see "Long Method"
    # And I see "Coverage"