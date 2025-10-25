# Workflow Step 4: Create Unit Tests

## Objective
Implement comprehensive unit tests following proper Test-Driven Development (TDD) principles, using the test strategy and exact "it" statements defined in step 3. Tests must be written BEFORE implementation and are expected to FAIL initially (red phase).

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the unit test strategy and exact "it" statements created in step 3 from the comments
- Understand the scope and requirements
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to testing approaches or similar functionality
  - Search for CTX memories that provide context about testing decisions or architectural patterns
  - Search for DOC memories that document testing patterns or strategies
  - Link to related memories when they provide valuable context for the current testing task

### 1a. Unit Testing Package Documentation Lookup (Context7 MCP)
When writing unit tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up unit testing documentation when you're unsure about testing approaches for specific packages
- Search for unit testing examples and patterns when you need clarification on how to test package integrations
- Look up mocking strategies and testing utilities when you need guidance on testing external dependencies
- Find best practices for unit testing when you're not familiar with the testing patterns for specific libraries
- Reference package-specific unit testing configuration or setup requirements when needed

### 2. TDD Implementation Principles (CRITICAL)

#### Fundamental TDD Rules
**CRITICAL**: These rules must be followed exactly:
1. **Tests are written BEFORE implementation** - not after
2. **Tests MUST fail initially** (red phase) because the functionality doesn't exist yet
3. **NEVER mock the functionality being developed** - only mock external dependencies
4. **Use the exact "it" statements** from step 3 test strategy
5. **Tests drive the implementation** - write minimal code to make tests pass

#### What to Mock vs What NOT to Mock
**DO Mock (External Dependencies):**
- APIs, databases, file systems
- Third-party libraries and services
- Network calls and HTTP requests
- Other components not being tested
- Logging utilities (if needed for isolation)

**DO NOT Mock (Functionality Being Developed):**
- The functions, methods, or classes being implemented
- The business logic being tested
- The core functionality of the feature
- Internal helper functions being developed

### 3. Determine Issue Type and Approach

#### For New Features or Bugs:
- Create test files based on the unit test strategy and exact "it" statements from step 3
- Write tests that describe the expected behavior using the planned "it" statements
- **CRITICAL**: These tests are expected to FAIL initially (red phase of TDD) because the functionality doesn't exist yet
- **CRITICAL**: Do NOT mock the functionality being developed - only mock external dependencies
- Implement the exact "it" statements defined in the unit test strategy

#### For Refactoring:
- **First**: Ensure all existing tests for current functional behavior are in place
- **Verify**: All existing tests must pass before proceeding
- **Add**: Any missing tests for current behavior that wasn't previously covered
- **Goal**: Establish a safety net so that during refactoring, we can ensure functionality remains intact

### 4. Test Implementation Guidelines
- Follow the project's testing conventions (Vitest in this case)
- Use the exact "it" statements from step 3 - do not deviate from the planned test names
- Organize tests logically based on the test strategy from step 3
- Include appropriate test data and fixtures as planned in step 3
- Ensure tests are isolated and don't depend on each other
- **CRITICAL**: Write tests that will FAIL initially - this proves TDD is working correctly

### 5. Test Structure
- Group related tests using `describe` blocks as planned in step 3
- Use `beforeEach`/`afterEach` hooks appropriately
- Follow the project's test file organization patterns
- Place tests in the appropriate `tests/` directory structure
- Use the exact test structure planned in step 3

### 6. Mocking Strategy (CRITICAL)
**Only mock external dependencies, never the functionality being developed:**

```typescript
// CORRECT - Mock external dependencies only
vi.mock('external-api-client');
vi.mock('database-connection');
vi.mock('logger');

// WRONG - Never mock the functionality being developed
// vi.mock('./function-being-developed'); // ❌ NEVER DO THIS
```

### 7. Validation (CRITICAL)
- For new features/bugs: **Verify that tests fail as expected (red phase)** - this is the core of TDD
- For refactoring: Verify that all existing tests pass (green phase)
- Ensure test coverage aligns with the defined unit test strategy from step 3
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles

### 8. TDD Validation (CRITICAL)
Before proceeding to implementation:
- **CRITICAL**: Run `pnpm test` and verify tests are FAILING (red phase)
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles
- Document that tests are failing as expected (red phase of TDD)
- Verify that only external dependencies are mocked, NOT the functionality being developed
- Confirm that tests use the exact "it" statements from step 3

### 9. Capture Testing Insights and Create Memories
During the test writing process, capture any valuable insights that emerge:
- **Testing patterns**: Effective testing approaches or anti-patterns discovered
- **Architectural insights**: How testing reveals architectural strengths or weaknesses
- **Design considerations**: How testability influences design decisions
- **Unit testing insights**: How testing reveals component interaction patterns
- **Maintainability insights**: Code structure observations based on test writing

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during testing
- **CTX memories**: For context about why certain testing approaches were chosen or what they reveal

Add these insights to the GitHub issue comment for future reference.

### 10. Update GitHub Issue with Test Implementation Results
After unit test implementation is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Unit Test Implementation Results" comment with the following content:
- Document what tests were implemented and their coverage
- **CRITICAL**: Document that tests are failing as expected (red phase of TDD)
- Note any deviations from the original test strategy and why
- Document any additional test cases or improvements made
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate

### 11. Commit Changes
After completing the test implementation:
- Stage all test-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "test: add unit test suite for [feature/component name] (red phase)"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome

### New Features/Bugs:
- Test files created with **FAILING tests** (red phase of TDD)
- Tests use the exact "it" statements from step 3 test strategy
- Tests cover all planned scenarios from the test strategy
- **CRITICAL**: Tests fail because functionality doesn't exist yet (proving TDD is working)
- Only external dependencies are mocked, NOT the functionality being developed
- Any testing insights captured as ADR or CTX memories
- GitHub issue updated with test implementation results
- Changes committed to git with conventional commit format
- Ready to proceed to implementation (red → green cycle)

### Refactoring:
- All existing functionality has passing tests
- Test coverage is comprehensive for current behavior
- Any testing insights captured as ADR or CTX memories
- GitHub issue updated with test implementation results
- Changes committed to git with conventional commit format
- Ready to proceed with refactoring while maintaining test safety