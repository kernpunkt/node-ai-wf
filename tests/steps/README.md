# Step Definitions

This directory contains Cucumber step definitions that implement the Gherkin steps used in feature files.

## Structure

- `*.steps.ts` - TypeScript step definition files
- Each file typically corresponds to a feature or domain area
- Steps are organized by Given/When/Then patterns

## Writing Step Definitions

### Basic Pattern
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I am on the login page', function () {
  // Setup code
});

When('I enter valid credentials', function () {
  // Action code
});

Then('I should be logged in', function () {
  // Assertion code
});
```

### Parameter Handling
```typescript
When('I enter {string} as username', function (username: string) {
  // Use the parameter
});

When('I enter {string} and {string}', function (username: string, password: string) {
  // Use multiple parameters
});
```

### Data Tables
```typescript
When('I enter the following credentials:', function (dataTable) {
  const credentials = dataTable.hashes()[0];
  // Use credentials.username and credentials.password
});
```

## Best Practices

1. **Single Responsibility**: Each step should do one thing
2. **Reusability**: Write steps that can be reused across scenarios
3. **Clear Names**: Use descriptive step names that match business language
4. **Error Handling**: Include proper error handling and meaningful error messages
5. **Type Safety**: Use TypeScript for better type safety and IDE support

## Shared Context

Use the `this` context to share data between steps:
```typescript
Given('I have a user account', function () {
  this.user = { name: 'John', email: 'john@example.com' };
});

When('I log in', function () {
  // Use this.user
});
```
