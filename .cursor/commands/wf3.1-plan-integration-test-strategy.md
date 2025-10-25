# Workflow Step 3.1: Plan Integration Test Strategy

## Objective
Define a comprehensive integration test strategy and test cases based on the given issue, focusing on planning rather than implementation.
Unit tests are not part of this step.

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Understand the scope and requirements for integration testing
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to integration testing approaches or similar functionality
  - Search for CTX memories that provide context about integration testing decisions or architectural patterns
  - Search for DOC memories that document integration testing patterns or strategies
  - Link to related memories when they provide valuable context for the current integration testing planning task

### 1a. Integration Testing Package Documentation Lookup (Context7 MCP)
When planning integration tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up integration testing documentation when you're unsure about testing approaches for specific packages
- Search for integration testing examples and patterns when you need clarification on how to test package integrations
- Look up mocking strategies and testing utilities when you need guidance on testing external dependencies in integration scenarios
- Find best practices for integration testing when you're not familiar with the testing patterns for specific libraries
- Reference package-specific integration testing configuration or setup requirements when needed

### 2. Define Integration Test Strategy
Based on the given issue, create a comprehensive integration test strategy:

#### Integration Test Scope Validation (CRITICAL)
Before defining the integration test strategy, ensure you understand the boundaries:
- **Integration Test Focus**: Test interactions between multiple components, APIs, and external systems
- **Real Dependencies**: Use real or near-real external dependencies (APIs, databases, services)
- **No Unit Testing**: Do not include tests that verify individual functions in isolation
- **Component Interactions**: Focus on how multiple components work together
- **End-to-End Workflows**: Test complete user journeys and data flows

#### Integration Test Strategy
- Define the integration testing approach for the specific feature/component
- **CRITICAL**: Focus ONLY on testing interactions between multiple components, APIs, and external systems
- Plan for comprehensive coverage of integration points and data flow
- **SCOPE BOUNDARY**: Integration tests must test real interactions, not isolated units
- Consider testing with real or near-real external dependencies (APIs, databases, services)
- Plan for test organization and structure
- **NO UNIT TESTING**: Do not include tests that verify individual functions in isolation

#### Integration Test Cases
List specific integration test cases covering:
- **End-to-end user workflows**: Complete user journeys across multiple components
- **Component interaction scenarios**: How multiple components work together
- **API integration points**: External API calls, data fetching, and response handling
- **Data flow between components**: How data moves through the system
- **External service integrations**: Third-party service interactions
- **Performance considerations**: Integration performance and scalability

**IMPORTANT**: Integration tests focus on testing interactions between multiple components. Do NOT include:
- Individual function testing (these belong in unit tests)
- Isolated component behavior (these belong in unit tests)
- Pure logic testing (these belong in unit tests)
- Mocked external dependencies (these belong in unit tests)

#### Integration Test Data and Fixtures
- Plan realistic integration test data that reflects production scenarios
- Create test fixtures for external service responses and database states
- Design test data that covers various integration scenarios and edge cases
- Ensure integration test data is isolated and doesn't affect other tests

### 3. Determine Issue Type and Approach

#### For New Features or Bugs:
- Plan test files based on the integration test strategy and test cases defined above
- Plan tests that describe the expected behavior
- **Important**: These tests are expected to fail initially (red phase of TDD)
- Plan the test cases defined in the integration test strategy

#### For Refactoring:
- **First**: Ensure all existing tests for current functional behavior are planned
- **Verify**: All existing tests must be planned to pass before proceeding
- **Add**: Any missing tests for current behavior that wasn't previously covered
- **Goal**: Establish a safety net so that during refactoring, we can ensure functionality remains intact

### 4. Integration Test Planning Guidelines
- Follow the project's testing conventions (Vitest in this case)
- Plan descriptive test names that clearly indicate what is being tested
- Organize tests logically based on the integration test strategy
- Include appropriate test data and fixtures as planned
- Ensure tests are planned to be isolated and don't depend on each other

### 5. Integration Test Structure Planning
- Plan grouping related tests using `describe` blocks
- Plan use of `beforeEach`/`afterEach` hooks appropriately
- Follow the project's test file organization patterns
- Plan placement of tests in the appropriate `tests/` directory structure

### 6. Validation Planning
- For new features/bugs: Plan to verify that tests fail as expected (red phase)
- For refactoring: Plan to verify that all existing tests pass (green phase)
- Ensure test coverage planning aligns with the defined integration test strategy

### 7. Capture Integration Testing Planning Insights and Create Memories
During the integration test planning process, capture any valuable insights that emerge:
- **Integration testing patterns**: Effective integration testing approaches or anti-patterns discovered
- **Architectural insights**: How integration testing planning reveals architectural strengths or weaknesses
- **Design considerations**: How integration testability influences design decisions
- **Integration testing insights**: How integration testing planning reveals component interaction patterns
- **Maintainability insights**: Code structure observations based on integration test planning

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during integration testing planning
- **CTX memories**: For context about why certain integration testing approaches were chosen or what they reveal

Add these insights to the GitHub issue comment for future reference.

### 8. Update GitHub Issue with Integration Test Strategy
After defining the integration test strategy and test cases (step 2):
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add an "Integration Test Strategy" comment with the following content:
- Document the integration test strategy, test cases, and test data/fixtures plan
- Include the specific test cases covering end-to-end workflows, component interactions, API integrations, data flow, external service integrations, and performance considerations
- Document the integration test data and fixtures plan
- This ensures the integration test strategy is available for implementation commands (wf4.1)

### 9. Commit Changes
After completing the integration test strategy planning:
- Stage all integration test strategy-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "docs: add integration test strategy for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome

### New Features/Bugs:
- Integration test strategy and test cases planned and documented
- Integration test cases cover all planned scenarios from the integration test strategy
- Any integration testing planning insights captured as ADR or CTX memories
- GitHub issue updated with integration test strategy
- Changes committed to git with conventional commit format
- Ready to proceed to integration test implementation (wf4.1)

### Refactoring:
- All existing functionality has planned integration tests
- Integration test coverage planning is comprehensive for current behavior
- Any integration testing planning insights captured as ADR or CTX memories
- GitHub issue updated with integration test strategy
- Changes committed to git with conventional commit format
- Ready to proceed with integration test implementation while maintaining test safety
