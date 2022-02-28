Feature: Dashboard

  Scenario: Show Dashboard
    Given I visit to "/"
    Then I see "Dashboard"

  @focus
  Scenario: Show list of DoD items
    Given There are DoD items
      |Long Method|
      |Coverage|
    # When I visit to "/"
    # And I click "DoD List"
    # Then I see "Long Method"
    # And I see "Coverage"