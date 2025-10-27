Feature: Application logging behavior
  As a developer
  I want to use logging functionality in my application
  So that I can track application behavior and debug issues

  Background:
    Given the application is running

  Scenario: Log application startup
    When the application starts
    Then the application should log startup information
    And the log level should be appropriate for startup

  Scenario: Log user authentication
    When a user attempts to log in
    And the authentication is successful
    Then the application should log the successful authentication
    And the log should include user information

  Scenario: Log error conditions
    When an error occurs in the application
    Then the application should log the error
    And the log should include error details
    And the log level should indicate an error

  Scenario: Log performance warnings
    When system performance degrades
    Then the application should log performance warnings
    And the log should include performance metrics
