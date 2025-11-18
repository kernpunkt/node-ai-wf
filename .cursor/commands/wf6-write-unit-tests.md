# Workflow Step: Write Unit Tests

## Purpose
Create comprehensive unit test suite.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active
   - Analyze implementation plan to understand test requirements

2. **Identify Test Components**
   - Identify components that need testing for this story
   - Review architectural design for component boundaries
   - Map components to required test coverage

3. **Create Minimal Skeleton Implementations**
   - Create skeleton files for each component being tested
   - **Minimal skeletons only**: Just enough to compile, not full implementations
   - **Function signatures**: Match exactly what tests expect
   - **Placeholder implementations**: 
     - Functions should throw `new Error('Not implemented')` or return placeholder values
     - Classes should have methods that throw `new Error('Not implemented')`
     - Interfaces/types should be defined but implementations should be minimal
   - **Purpose**: Make tests compilable and runnable, NOT to design the full solution
   - **Follow existing patterns**: Use project conventions for file structure

4. **Write Unit Tests**
   - Write unit tests for each component (organized by component, not story)
   - **Tests must import and call skeleton functions/classes**
   - **Tests must specify BEHAVIOR, not just check for existence**
   - Implement test doubles and mocks where appropriate, be careful not to over-mock: functionality tested must never be mocked!
   - Add edge case and error condition tests
   - Ensure test coverage meets standards
   - Follow existing test patterns and conventions

5. **Red Phase Validation (MANDATORY)**
   - Run unit tests: `pnpm test` to verify they compile and execute
   - **Verify tests FAIL for the correct reason**: Tests should fail because:
     - Functions throw "Not implemented" errors, OR
     - Functions return placeholder values that don't match expected behavior
     - Tests should NOT fail because of:
       - Syntax errors
       - Type errors
       - Import errors
       - Incorrect test structure
   - **Validate test quality**: Each test must:
     - Call the actual skeleton function/component being tested
     - Use specific, realistic input values
     - Assert specific, measurable expected outcomes
     - NOT contain placeholder code (empty bodies, TODOs, generic assertions)
   - **If tests don't fail correctly**: Fix tests immediately before proceeding
   - **If skeletons are too complete**: Simplify skeletons to minimal placeholders
   **⚠️ CRITICAL: Do NOT proceed to wf-7 until all tests fail correctly and meaningfully**

6. **Organize Test Files**
   - Organize test files by component/feature, not by story
   - Follow existing test file structure and naming conventions
   - Ensure test files are discoverable and maintainable

## Test Writing Guidelines

### ✅ Good Test (Specific Behavior Specification)
```typescript
describe('UserService', () => {
  it('should return user with email when valid ID is provided', () => {
    const userId = 'user-123';
    const expectedEmail = 'user@example.com';
    
    const result = getUserById(userId);
    
    expect(result).toEqual({
      id: userId,
      email: expectedEmail,
      name: 'John Doe'
    });
  });
});
```

### ❌ Bad Test (Placeholder)
```typescript
describe('UserService', () => {
  it('should get user', () => {
    // TODO: implement test
    expect(getUserById('id')).toBeDefined();
  });
});
```

### ❌ Bad Test (Too Generic)
```typescript
describe('UserService', () => {
  it('should work correctly', () => {
    const result = getUserById('test');
    expect(result).not.toBeNull();
  });
});
```

### ✅ Good Skeleton Implementation
```typescript
// src/services/user-service.ts
export function getUserById(userId: string): User {
  throw new Error('Not implemented');
}

export function createUser(userData: CreateUserInput): User {
  throw new Error('Not implemented');
}
```

### ❌ Bad Skeleton (Too Complete)
```typescript
// ❌ Don't do this - too much implementation
export function getUserById(userId: string): User {
  // This is too much - should just throw or return placeholder
  if (!userId) {
    return null;
  }
  return { id: userId, name: 'Placeholder' };
}
```

### Key Principles
- **Be specific**: Use concrete input values and expected outputs
- **One behavior per test**: Each test should verify one specific behavior
- **Complete implementation**: No TODOs, placeholders, or empty bodies in tests
- **Meaningful assertions**: Assert specific values, not just existence
- **Minimal skeletons**: Skeletons should only enable compilation, not implement logic

## Output
- Skeleton implementation files (organized by component)
- Unit test files (organized by component)
- Comprehensive test coverage
- Test doubles and mocks
- Edge case and error condition tests

## Success Criteria
- All skeleton implementations created and compilable
- Unit test files created for all components
- All tests execute and fail for correct reasons
- Test coverage meets or exceeds standards
- Tests are organized by component, not story
- All edge cases and error conditions tested
- No placeholder or TODO code in tests
- Unit tests ready for implementation validation

**Note**: After completing this step, BDD tests and unit tests will FAIL because the actual implementation has not been written yet. This is the expected "red phase" of the TDD/BDD cycle. Tests should fail because skeleton implementations throw "Not implemented" errors or return placeholder values. The implementation will be created in workflow step wf7, which will replace skeleton implementations with working code and make both the BDD tests and unit tests pass.

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories
