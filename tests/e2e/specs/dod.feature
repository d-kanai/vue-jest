Feature: DoD

  Scenario: Show list of DoD Items
    Given There are DoD items
      |Long Method|
      |Coverage|
    When I visit to "/"
    And I click "DoD"
    Then I see "Long Method"
    And I see "Coverage"

  @focus
  Scenario: Create DoD Item
    Given I visit to "/dods"
    When I fill in DoD info
      |name|Long Method|
    And I click "Create DoD"
    Then I see "Long Method"