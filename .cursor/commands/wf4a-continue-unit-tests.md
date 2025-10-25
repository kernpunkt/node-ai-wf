# Workflow Step 4a: Continue Creating Unit Tests

## Objective
Resume unit test writing when interrupted during wf4, analyzing what has been completed and what remains to be done, then continuing from where the unit testing work was left off.

## Instructions

### 1. Analyze Current State and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the unit test strategy and test cases from step 3 from the comments
- Examine the current test files to understand what has already been implemented
- Identify any partial test implementations or incomplete test coverage
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to testing approaches or similar functionality
  - Search for CTX memories that provide context about testing decisions or architectural patterns
  - Search for DOC memories that document testing patterns or strategies
  - Link to related memories when they provide valuable context for completing the testing task

### 1a. Unit Testing Package Documentation Lookup (Context7 MCP)
When completing unit tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up unit testing documentation when you're unsure about testing approaches for specific packages
- Search for unit testing examples and patterns when you need clarification on how to test package integrations
- Look up advanced unit testing scenarios and edge cases when you need guidance on testing complex package features
- Find troubleshooting guides when you encounter unit testing issues during partial implementation
- Reference package-specific unit testing configuration or setup requirements when you need clarification

### 2. Assess Completion Status
Analyze what has been completed vs. what remains:

#### Completed Work
- Identify which test files have been created
- Review existing test implementations and their coverage
- Note any tests that are already passing
- Document any test infrastructure that's already in place

#### Remaining Work
- Identify which planned test cases haven't been implemented yet
- Note any test files that need to be created
- Identify any incomplete test implementations
- Assess if the unit test strategy needs adjustment based on what's been learned

### 3. Resume Test Implementation
Continue from where the work was interrupted:

#### For New Features or Bugs:
- Complete any partially written tests
- Create missing test files based on the unit test strategy
- Implement remaining test cases from the plan
- Ensure all planned scenarios are covered:
  - Happy path scenarios
  - Edge cases and error conditions
  - Component interactions
  - Performance considerations

#### For Refactoring:
- Complete any missing tests for current functional behavior
- Ensure all existing functionality has comprehensive test coverage
- Verify that the safety net is complete before proceeding

### 4. Validate Current Test State
- Run existing tests to ensure they still pass
- Verify that the current test coverage aligns with the defined unit test strategy
- Identify any gaps or areas that need additional testing
- Ensure tests are properly organized and follow project conventions

### 5. Complete the Test Strategy
- Finish implementing all planned test cases
- Ensure test coverage is comprehensive and meets the unit test strategy requirements
- Verify that tests are properly structured and organized
- Confirm that all tests are ready for the implementation phase

### 5.1 TDD Validation (CRITICAL)
Before proceeding to implementation:
- **CRITICAL**: Run `pnpm test` and verify tests are FAILING (red phase)
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles
- Document that tests are failing as expected (red phase of TDD)
- Verify that only external dependencies are mocked, NOT the functionality being developed

### 6. Final Validation
- Run all tests to ensure they're properly implemented
- Verify that the unit test strategy has been fully executed
- Confirm that the test coverage is ready for the next workflow step
- Document any adjustments made to the original test plan

### 7. Capture Testing Continuation Insights and Create Memories
During the test continuation process, capture any additional insights that emerge:
- **Testing completion patterns**: How finishing tests reveals additional architectural considerations
- **Coverage insights**: What completing test coverage reveals about the system design
- **Unit testing insights**: How comprehensive testing reveals component interaction patterns
- **Maintainability observations**: Code structure insights based on complete test coverage
- **Testing strategy refinements**: Lessons learned about effective testing approaches

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during test completion
- **CTX memories**: For context about why certain testing approaches were effective or what they revealed

Add these insights to the GitHub issue comment for future reference.

### 8. Update GitHub Issue
After unit test continuation is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Unit Test Continuation Results" comment with the following content:
- Document what additional tests were implemented and their coverage
- Note any deviations from the original test strategy and why
- Document any additional test cases or improvements made during continuation
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate

### 9. Commit Changes
After completing the test continuation:
- Stage all test-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "test: complete unit test suite for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- All planned tests from the test strategy are implemented
- Test coverage is comprehensive and ready for implementation
- Any partial work has been completed
- Tests are properly organized and follow project conventions
- Any testing continuation insights captured as ADR or CTX memories
- GitHub issue updated with test continuation results
- Changes committed to git with conventional commit format
- Ready to proceed to the next workflow step (wf4 or wf4a if interrupted again)
