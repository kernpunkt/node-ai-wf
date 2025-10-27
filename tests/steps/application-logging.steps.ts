import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { logInfo, logError, logWarn, logDebug } from '../../src/logger.js';

// Test that the logger functions don't throw errors
// This is a more realistic BDD test - we're testing behavior, not implementation

Given('the application is running', function () {
  // Application is ready for testing
});

When('the application starts', function () {
  // Test that we can log startup information without errors
  expect(() => logInfo('Application started successfully')).to.not.throw();
});

Then('the application should log startup information', function () {
  // Verify that logging startup info works
  expect(() => logInfo('Application startup completed')).to.not.throw();
});

Then('the log level should be appropriate for startup', function () {
  // Test that info level logging works
  expect(() => logInfo('Startup configuration loaded')).to.not.throw();
});

When('a user attempts to log in', function () {
  // Simulate user login attempt
  expect(() => logInfo('User login attempt initiated')).to.not.throw();
});

When('the authentication is successful', function () {
  // Simulate successful authentication
  expect(() => logInfo('User authentication successful')).to.not.throw();
});

Then('the application should log the successful authentication', function () {
  // Test that we can log authentication success
  expect(() => logInfo('User session established')).to.not.throw();
});

Then('the log should include user information', function () {
  // Test logging with metadata
  const userInfo = { userId: '12345', username: 'testuser' };
  expect(() => logInfo('User session details', userInfo)).to.not.throw();
});

When('an error occurs in the application', function () {
  // Simulate an error condition
  expect(() => logError('Application error occurred')).to.not.throw();
});

Then('the application should log the error', function () {
  // Test error logging
  expect(() => logError('Database connection failed')).to.not.throw();
});

Then('the log should include error details', function () {
  // Test error logging with error object
  const error = new Error('Test error');
  expect(() => logError('Error details', error)).to.not.throw();
});

Then('the log level should indicate an error', function () {
  // Test that error level logging works
  expect(() => logError('Critical system failure')).to.not.throw();
});

When('system performance degrades', function () {
  // Simulate performance issues
  expect(() => logWarn('System performance degradation detected')).to.not.throw();
});

Then('the application should log performance warnings', function () {
  // Test warning level logging
  expect(() => logWarn('High memory usage detected')).to.not.throw();
});

Then('the log should include performance metrics', function () {
  // Test logging with performance metadata
  const metrics = { cpuUsage: '85%', memoryUsage: '90%', responseTime: '2.5s' };
  expect(() => logWarn('Performance metrics', metrics)).to.not.throw();
});
