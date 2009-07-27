Feature: Test runner
  In order to reduce launch times and hassles with browsers when running JavaScript tests
  As a JavaScript developer
  I want a headless test runner

  Scenario: Run the test runner in Rails project
    Given I have a Rails project with blue-ridge installed
    When I invoke task "rake test:js"
    Then I should see "Running accounts_new_spec.js with fixture 'fixtures/accounts_new.html'..."
    And I should not see "FAILED"
  
  Scenario: Run the test runner in non-Rails project
    Given I have a non-Rails project with blue-ridge installed
    When I invoke task "rake test:js"
    Then I should see "Running my_lib_spec.js with fixture 'fixtures/my_lib.html'..."
    And I should not see "FAILED"

  Scenario: Run the test runner in blue-ridge itself
    Given this project is active project folder
    When I invoke task "rake test:js"
    Then I should see "Running screw.print_spec.js with fixture 'fixtures/screw.print.html'..."
    And I should not see "FAILED"


