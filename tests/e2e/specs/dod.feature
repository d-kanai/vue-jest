Feature: DoD

  Scenario: Show list of DoD Items
    Given There are DoD items
      |Long Method|
      |Coverage|
    When I visit to "/"
    And I click "DoD"
    Then I see "Long Method"
    And I see "Coverage"

  Scenario: Create DoD Item
    Given I visit to "/dods"
    When I fill in DoD info
      |name|Long Method|
    And I click "Create DoD"
    Then I see "Long Method"

  @focus
  Scenario: Create DoD Record
    Given There are DoD items
      |Long Method|
    And I visit to "/dods"
    When I click "Long Method"
    And I fill in DoD Record info for "Long Method"
      |date|2022-01-01|
      |value|30|
      |comment|Add new feature|
    And I click "Create DoD Record"
    Then I see "2022-01-01" in DoD Record
    And I see "30" in DoD Record