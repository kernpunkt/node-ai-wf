# Workflow Step 4.1a: Continue Creating Integration Tests

## Objective
Resume integration test writing when interrupted during wf4.1, analyzing what has been completed and what remains to be done, then continuing from where the integration testing work was left off.

## Instructions

### 1. Analyze Current State and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the integration test strategy and test cases from step 3.1 from the comments
- Examine the current integration test files to understand what has already been implemented
- Identify any partial integration test implementations or incomplete test coverage
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to integration testing approaches or similar functionality
  - Search for CTX memories that provide context about integration testing decisions or architectural patterns
  - Search for DOC memories that document integration testing patterns or strategies
  - Link to related memories when they provide valuable context for completing the integration testing task

### 1a. Integration Testing Package Documentation Lookup (Context7 MCP)
When completing integration tests that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up integration testing documentation when you're unsure about testing approaches for specific packages
- Search for integration testing examples and patterns when you need clarification on how to test package integrations
- Look up advanced integration testing scenarios and edge cases when you need guidance on testing complex package features
- Find troubleshooting guides when you encounter integration testing issues during partial implementation
- Reference package-specific integration testing configuration or setup requirements when you need clarification

### 2. Assess Completion Status
Analyze what has been completed vs. what remains:

#### Completed Work
- Identify which integration test files have been created
- Review existing integration test implementations and their coverage
- Note any integration tests that are already passing
- Document any integration test infrastructure that's already in place

#### Remaining Work
- Identify which planned integration test cases haven't been implemented yet
- Note any integration test files that need to be created
- Identify any incomplete integration test implementations
- Assess if the integration test strategy needs adjustment based on what's been learned

### 3. Resume Integration Test Implementation
Continue from where the work was interrupted:

#### For New Features or Bugs:
- Complete any partially written integration tests
- Create missing integration test files based on the integration test strategy
- Implement remaining integration test cases from the plan
- Ensure all planned integration scenarios are covered:
  - End-to-end user workflows
  - Component interaction scenarios
  - API integration points
  - Data flow between components
  - External service integrations
  - Performance considerations

#### For Refactoring:
- Complete any missing integration tests for current functional behavior
- Ensure all existing integration functionality has comprehensive test coverage
- Verify that the safety net is complete before proceeding

### 4. Validate Current Integration Test State
- Run existing integration tests to ensure they still pass
- Verify that the current integration test coverage aligns with the planned strategy
- Identify any gaps or areas that need additional integration testing
- Ensure integration tests are properly organized and follow project conventions

### 5. Complete the Integration Test Strategy
- Finish implementing all planned integration test cases
- Ensure integration test coverage is comprehensive and meets the strategy requirements
- Verify that integration tests are properly structured and organized
- Confirm that all integration tests are ready for the implementation phase

### 5.1 TDD Validation (CRITICAL)
Before proceeding to implementation:
- **CRITICAL**: Run `pnpm test` and verify integration tests are FAILING (red phase)
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles
- Document that integration tests are failing as expected (red phase of TDD)
- Verify that only external dependencies are mocked, NOT the functionality being developed

### 6. Final Validation
- Run all integration tests to ensure they're properly implemented
- Verify that the integration test strategy has been fully executed
- Confirm that the integration test coverage is ready for the next workflow step
- Document any adjustments made to the original integration test plan

### 7. Capture Integration Testing Continuation Insights and Create Memories
During the integration test continuation process, capture any additional insights that emerge:
- **Integration testing completion patterns**: How finishing integration tests reveals additional architectural considerations
- **Coverage insights**: What completing integration test coverage reveals about the system design
- **Integration testing insights**: How comprehensive integration testing reveals component interaction patterns
- **Maintainability observations**: Code structure insights based on complete integration test coverage
- **Integration testing strategy refinements**: Lessons learned about effective integration testing approaches
- **API integration patterns**: Best practices discovered for testing external service integrations

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during integration test completion
- **CTX memories**: For context about why certain integration testing approaches were effective or what they revealed

Add these insights to the GitHub issue comment for future reference.

### 8. Update GitHub Issue
After integration test continuation is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add an "Integration Test Continuation Results" comment with the following content:
- Document what additional integration tests were implemented and their coverage
- Note any deviations from the original integration test strategy and why
- Document any additional integration test cases or improvements made during continuation
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate

### 9. Commit Changes
After completing the integration test continuation:
- Stage all integration test-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "test: complete integration test suite for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- All planned integration tests from the integration test strategy are implemented
- Integration test coverage is comprehensive and ready for implementation
- Any partial work has been completed
- Integration tests are properly organized and follow project conventions
- Any integration testing continuation insights captured as ADR or CTX memories
- GitHub issue updated with integration test continuation results
- Changes committed to git with conventional commit format
- Ready to proceed to the next workflow step (wf4.1 or wf4.1a if interrupted again)
