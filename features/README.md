# BDD Testing with Cucumber

This directory contains Gherkin feature files that define the behavior of the application using business-readable language.

## Structure

- `*.feature` - Gherkin feature files describing application behavior
- Each feature file contains:
  - Feature description
  - Background (common setup)
  - Scenarios (specific test cases)
  - Scenario outlines (parameterized tests)

## Writing Features

### Basic Structure
```gherkin
Feature: Feature name
  As a [user type]
  I want to [goal]
  So that [benefit]

  Background:
    Given [common setup]

  Scenario: Scenario name
    Given [initial context]
    When [action]
    Then [expected outcome]
```

### Example
```gherkin
Feature: User authentication
  As a user
  I want to log in
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in
```

## Running BDD Tests

- `pnpm test:bdd` - Run only BDD tests
- `pnpm test:all` - Run both TDD and BDD tests
- `pnpm test:full` - Run all tests with linting and formatting

## Reports

Test reports are generated in the `reports/` directory:
- `cucumber-report.html` - HTML report
- `cucumber-report.json` - JSON report for CI/CD
