# Workflow Step 4.1: Create Integration Tests

## Objective
Implement comprehensive integration tests that verify component interactions, API integrations, and end-to-end workflows following Test-Driven Development (TDD) principles, using the integration test strategy and test cases defined in step 3.1.

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the integration test strategy and test cases created in step 3.1 from the comments
- Understand the scope and requirements for integration testing
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to integration testing approaches or similar functionality
  - Search for CTX memories that provide context about integration testing decisions or architectural patterns
  - Search for DOC memories that document integration testing patterns or strategies
  - Link to related memories when they provide valuable context for the current integration testing task

### 1a. Integration Testing Package Documentation Lookup (Context7 MCP)
When writing integration tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up integration testing documentation when you're unsure about testing approaches for specific packages
- Search for integration testing examples and patterns when you need clarification on how to test package integrations
- Look up mocking strategies and testing utilities when you need guidance on testing external dependencies in integration scenarios
- Find best practices for integration testing when you're not familiar with the testing patterns for specific libraries
- Reference package-specific integration testing configuration or setup requirements when needed

### 2. Determine Issue Type and Approach

#### For New Features or Bugs:
- Create integration test files based on the integration test strategy and test cases from step 3.1
- Write tests that verify component interactions and API integrations
- **Important**: These tests are expected to fail initially (red phase of TDD)
- Implement the test cases defined in the integration test strategy

#### For Refactoring:
- **First**: Ensure all existing integration tests for current functional behavior are in place
- **Verify**: All existing integration tests must pass before proceeding
- **Add**: Any missing integration tests for current behavior that wasn't previously covered
- **Goal**: Establish a safety net so that during refactoring, we can ensure integration functionality remains intact

### 3. Integration Test Implementation Guidelines
- Follow the project's testing conventions (Vitest in this case)
- Use descriptive test names that clearly indicate what integration is being tested
- Organize tests logically based on the integration test strategy from step 3.1
- Include appropriate test data and fixtures as planned in step 3.1
- Ensure tests are isolated and don't depend on each other
- Focus on testing real component interactions, not just unit-level functionality

### 4. Integration Test Structure
- Group related integration tests using `describe` blocks
- Use `beforeEach`/`afterEach` hooks appropriately for setup and cleanup
- Follow the project's test file organization patterns
- Place integration tests in the appropriate `tests/integration/` directory structure
- Use realistic test data that reflects production scenarios

### 5. Integration Test Categories
Focus on these key integration areas:
- **API Integration Tests**: Test external API calls, data fetching, and response handling
- **Component Integration Tests**: Test how multiple components work together
- **Database Integration Tests**: Test data persistence and retrieval workflows
- **Authentication Integration Tests**: Test login/logout flows and session management
- **Service Integration Tests**: Test interactions between different services or modules
- **End-to-End Workflow Tests**: Test complete user journeys across multiple components

### 6. Validation
- For new features/bugs: Verify that integration tests fail as expected (red phase)
- For refactoring: Verify that all existing integration tests pass (green phase)
- Ensure integration test coverage aligns with the defined integration test strategy from step 3.1
- Verify that tests actually test integration points, not just individual unit functionality

### 6.1 TDD Validation (CRITICAL)
Before proceeding to implementation:
- **CRITICAL**: Run `pnpm test` and verify integration tests are FAILING (red phase)
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles
- Document that integration tests are failing as expected (red phase of TDD)
- Verify that only external dependencies are mocked, NOT the functionality being developed

### 7. Capture Integration Testing Insights and Create Memories
During the integration test writing process, capture any valuable insights that emerge:
- **Integration testing patterns**: Effective integration testing approaches or anti-patterns discovered
- **Architectural insights**: How integration testing reveals architectural strengths or weaknesses
- **Design considerations**: How integration testability influences design decisions
- **Integration testing insights**: How testing reveals component interaction patterns
- **Maintainability insights**: Code structure observations based on integration test writing
- **API integration patterns**: Best practices for testing external service integrations

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during integration testing
- **CTX memories**: For context about why certain integration testing approaches were chosen or what they reveal

Add these insights to the GitHub issue comment for future reference.

### 8. Update GitHub Issue with Integration Test Implementation Results
After integration test implementation is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add an "Integration Test Implementation Results" comment with the following content:
- Document what integration tests were implemented and their coverage
- Note any deviations from the original test strategy and why
- Document any additional integration test cases or improvements made
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate

### 9. Commit Changes
After completing the integration test implementation:
- Stage all integration test-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "test: add integration test suite for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome

### New Features/Bugs:
- Integration test files created with failing tests
- Tests cover all planned integration scenarios from the test strategy
- Any integration testing insights captured as ADR or CTX memories
- GitHub issue updated with integration test implementation results
- Changes committed to git with conventional commit format
- Ready to proceed to implementation (red → green cycle)

### Refactoring:
- All existing integration functionality has passing tests
- Integration test coverage is comprehensive for current behavior
- Any integration testing insights captured as ADR or CTX memories
- GitHub issue updated with integration test implementation results
- Changes committed to git with conventional commit format
- Ready to proceed with refactoring while maintaining integration test safety