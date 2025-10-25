# Workflow Step 3: Plan Unit Test Strategy

## Objective
Define a comprehensive unit test strategy and test cases based on the given issue, focusing on planning rather than implementation. This strategy must follow proper Test-Driven Development (TDD) principles where tests are written BEFORE implementation and are expected to FAIL initially.
Integration tests are not part of this Step

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Understand the scope and requirements for unit testing
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to testing approaches or similar functionality
  - Search for CTX memories that provide context about testing decisions or architectural patterns
  - Search for DOC memories that document testing patterns or strategies
  - Link to related memories when they provide valuable context for the current testing planning task

### 1a. Unit Testing Package Documentation Lookup (Context7 MCP)
When planning unit tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up unit testing documentation when you're unsure about testing approaches for specific packages
- Search for unit testing examples and patterns when you need clarification on how to test package integrations
- Look up mocking strategies and testing utilities when you need guidance on testing external dependencies
- Find best practices for unit testing when you're not familiar with the testing patterns for specific libraries
- Reference package-specific unit testing configuration or setup requirements when needed

### 2. Define Unit Test Strategy
Based on the given issue, create a comprehensive unit test strategy:

#### TDD Principles (CRITICAL)
**FUNDAMENTAL TDD RULE**: Tests are written BEFORE implementation and MUST fail initially (red phase)
- **Red Phase**: Tests are written first and expected to FAIL because the functionality doesn't exist yet
- **Green Phase**: Minimal implementation is written to make tests pass
- **Refactor Phase**: Code is improved while keeping tests green
- **NEVER mock the functionality being developed** - only mock external dependencies

#### Unit Test Scope Validation (CRITICAL)
Before defining the unit test strategy, ensure you understand the boundaries:
- **Unit Test Focus**: Only test individual functions, methods, and components in complete isolation
- **Mock External Dependencies Only**: Mock APIs, databases, other components, but NOT the functionality being developed
- **No Integration Testing**: Do not include tests that verify interactions between multiple components
- **No External Dependencies**: Do not include tests that make real API calls or database operations
- **Single Responsibility**: Each unit test should test one specific function or method

#### Unit Test Strategy
- Define the unit testing approach for the specific feature/component
- **CRITICAL**: Focus ONLY on testing individual functions, methods, and components in complete isolation
- Plan for comprehensive coverage of business logic and edge cases within individual units
- **CRITICAL**: Only mock external dependencies (APIs, databases, other components), NOT the functionality being developed
- Plan for test organization and structure
- **SCOPE BOUNDARY**: Unit tests must NOT test interactions between multiple components or external systems

#### Actual Test Cases (with "it" statements)
**CRITICAL**: Instead of general descriptions, provide the exact "it" statements that will be written in the test files:

```typescript
describe('ComponentName', () => {
  it('should handle valid input correctly', () => {
    // Test implementation
  });
  
  it('should throw error when input is invalid', () => {
    // Test implementation
  });
  
  it('should process data according to business rules', () => {
    // Test implementation
  });
});
```

List specific "it" statements covering:
- **Happy path scenarios**: `it('should [expected behavior] when [condition]')`
- **Edge cases and error conditions**: `it('should throw error when [invalid condition]')`
- **Individual component behavior**: `it('should [component behavior] with [specific input]')`
- **Function-level testing**: `it('should [function behavior] given [input parameters]')`
- **Mocking requirements**: External dependencies that need to be mocked (but NOT the functionality being developed)
- **Unit-level performance**: `it('should handle [performance scenario] efficiently')`

**IMPORTANT**: Unit tests focus on testing individual units in isolation. Do NOT include:
- Multi-component interactions (these belong in integration tests)
- API calls to external services (these belong in integration tests)
- Database operations (these belong in integration tests)
- End-to-end workflows (these belong in integration tests)

#### Test Data and Fixtures
- Plan realistic test data that reflects production scenarios
- Create reusable test fixtures for common test scenarios
- Design test data that covers edge cases and error conditions
- Ensure test data is isolated and doesn't affect other tests

### 3. Determine Issue Type and Approach

#### For New Features or Bugs:
- Plan test files based on the unit test strategy and test cases defined above
- Plan tests that describe the expected behavior
- **CRITICAL**: These tests are expected to FAIL initially (red phase of TDD) because the functionality doesn't exist yet
- **NEVER mock the functionality being developed** - only mock external dependencies
- Plan the exact "it" statements that will be written in the test files

#### For Refactoring:
- **First**: Ensure all existing tests for current functional behavior are planned
- **Verify**: All existing tests must be planned to pass before proceeding
- **Add**: Any missing tests for current behavior that wasn't previously covered
- **Goal**: Establish a safety net so that during refactoring, we can ensure functionality remains intact

### 4. Test Planning Guidelines
- Follow the project's testing conventions 
- Plan descriptive test names that clearly indicate what is being tested
- Organize tests logically based on the test strategy
- Include appropriate test data and fixtures as planned
- Ensure tests are planned to be isolated and don't depend on each other
- **CRITICAL**: Plan for tests to FAIL initially (red phase) - this is the core of TDD

### 5. Test Structure Planning
- Plan grouping related tests using `describe` blocks
- Plan use of `beforeEach`/`afterEach` hooks appropriately
- Follow the project's test file organization patterns
- Plan placement of tests in the appropriate `tests/` directory structure

### 6. Validation Planning
- For new features/bugs: Plan to verify that tests fail as expected (red phase) - this proves TDD is working correctly
- For refactoring: Plan to verify that all existing tests pass (green phase)
- Ensure test coverage planning aligns with the defined unit test strategy

### 7. Capture Testing Planning Insights and Create Memories
During the test planning process, capture any valuable insights that emerge:
- **Testing patterns**: Effective testing approaches or anti-patterns discovered
- **Architectural insights**: How testing planning reveals architectural strengths or weaknesses
- **Design considerations**: How testability influences design decisions
- **Unit testing insights**: How testing planning reveals component interaction patterns
- **Maintainability insights**: Code structure observations based on test planning

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during testing planning
- **CTX memories**: For context about why certain testing approaches were chosen or what they reveal

Add these insights to the GitHub issue comment for future reference.

### 8. Update GitHub Issue with Test Strategy
After defining the unit test strategy and test cases (step 2):
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Unit Test Strategy" comment with the following content:
- Document the unit test strategy, test cases, and test data/fixtures plan
- Include the specific test cases covering happy path, edge cases, component interactions, performance considerations, and mocking requirements
- Document the test data and fixtures plan
- This ensures the test strategy is available for implementation commands (wf4)

### 9. Commit Changes
After completing the test strategy planning:
- Stage all test strategy-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "docs: add unit test strategy for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome

### New Features/Bugs:
- Test strategy and test cases planned and documented
- Test cases cover all planned scenarios from the test strategy
- Any testing planning insights captured as ADR or CTX memories
- GitHub issue updated with test strategy
- Changes committed to git with conventional commit format
- Ready to proceed to test implementation (wf4)

### Refactoring:
- All existing functionality has planned tests
- Test coverage planning is comprehensive for current behavior
- Any testing planning insights captured as ADR or CTX memories
- GitHub issue updated with test strategy
- Changes committed to git with conventional commit format
- Ready to proceed with test implementation while maintaining test safety
