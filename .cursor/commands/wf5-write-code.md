# Workflow Step 5: Write Code

## Objective
Implement functionality following the implementation checklist from the GitHub issue, using TDD principles for new features/bugs or maintaining test safety for refactoring.

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the implementation plan and step-by-step implementation checklist from the comments
- **CRITICAL**: Review the "Issue Scope and Boundaries" section to understand what is and isn't included
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to implementation approaches or similar functionality
  - Search for CTX memories that provide context about implementation decisions or architectural patterns
  - Search for DOC memories that document implementation patterns or technical approaches
  - Link to related memories when they provide valuable context for the current implementation task

### 2. TDD Validation (CRITICAL - MUST PASS)
**BLOCKING**: Before starting implementation, verify TDD is working correctly:
- Run `pnpm test` and verify tests are FAILING (red phase)
- **FAILURE = BLOCKED**: If tests are already passing, TDD has been violated
- **CRITICAL**: Tests must fail because functionality doesn't exist yet
- Verify that implemented tests match the exact "it" statements from wf3
- Ensure tests are testing the functionality being developed, not external dependencies
- Confirm that only external dependencies are mocked, not the functionality being developed

### 3. Scope Boundary Validation (CRITICAL)
Before starting implementation, ensure you understand and respect the issue boundaries:
- **Review scope exclusions**: What functionality is explicitly NOT included in this issue?
- **Check related issues**: Are there other open issues that cover related functionality?
- **Stay focused**: Only implement what is explicitly included in the current issue
- **Avoid scope creep**: Do not add features that belong to other issues, even if they seem related

### 4. Package Documentation Lookup (Context7 MCP)
When implementing features that use pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up current documentation when you're unsure about package usage
- Search for specific code examples when you need clarification on implementation approaches
- Look up API references for packages or features you're not familiar with
- Find best practices and common patterns when you need guidance on proper usage

### 5. Implementation Approach by Issue Type

#### For New Features or Bugs:
- Follow the TDD cycle (Red → Green → Refactor) until all tests pass
- **Red Phase**: Verify tests are failing (already done in step 3)
- **Green Phase**: Implement the minimum code needed to make tests pass
- **Refactor Phase**: Clean up and improve the code while keeping tests green
- Complete each item in the implementation checklist
- Run tests after each significant change to ensure they continue to pass

#### For Refactoring:
- Complete the implementation checklist step by step
- **Critical**: After each change, run all tests to ensure they continue to pass
- Maintain the existing functionality while improving the code structure
- Use tests as a safety net to verify no regressions are introduced

### 6. Implementation Guidelines
- **CRITICAL**: Stay within the defined issue scope and boundaries at all times
- Follow the data structures and interfaces plan from step 2
- Implement UI components as planned (if applicable)
- Follow project coding conventions and patterns
- Use appropriate error handling and edge case management
- Ensure code is clean, readable, and maintainable
- Apply package-specific best practices (use context7 MCP if you need to look up best practices for unfamiliar packages)

### 7. Testing During Implementation
- Run tests frequently to catch issues early
- For new features: Verify that previously failing tests now pass
- For refactoring: Verify that all existing tests continue to pass
- Address any test failures immediately before proceeding

### 8. MANDATORY Completion Validation (BLOCKING - MUST PASS)
**CRITICAL**: ALL of these validations MUST pass before proceeding to completion. If ANY fail, implementation is NOT complete:

#### 8.1 Test Validation (BLOCKING)
- **MANDATORY**: Run `pnpm test` and verify ALL tests pass
- **BLOCKING**: If ANY tests fail, implementation is NOT complete
- **CRITICAL**: Address all test failures before proceeding

#### 8.2 Lint Validation (BLOCKING)
- **MANDATORY**: Run `pnpm lint` and verify NO errors or warnings
- **BLOCKING**: If ANY lint errors exist, implementation is NOT complete
- **CRITICAL**: Fix all lint errors before proceeding

#### 8.3 Type Safety Validation (BLOCKING)
- **MANDATORY**: Run `pnpm type-check` and verify NO TypeScript errors
- **BLOCKING**: If ANY type errors exist, implementation is NOT complete
- **CRITICAL**: Fix all type errors before proceeding

#### 8.4 Implementation Checklist Validation (BLOCKING)
- **MANDATORY**: Verify that ALL items in the implementation checklist are completed
- **BLOCKING**: If ANY checklist items are incomplete, implementation is NOT complete
- **CRITICAL**: Complete all remaining checklist items before proceeding

#### 8.5 Code Formatting (BLOCKING)
- **MANDATORY**: Run `pnpm format` to ensure consistent code formatting
- **BLOCKING**: If formatting changes are needed, apply them and re-validate
- **CRITICAL**: Code must be properly formatted before completion

#### 8.6 Final Validation Run (BLOCKING)
- **MANDATORY**: After formatting, re-run ALL validation steps:
  - `pnpm test` - ALL tests must pass
  - `pnpm lint` - NO errors or warnings
  - `pnpm type-check` - NO type errors
- **BLOCKING**: If ANY validation fails after formatting, implementation is NOT complete
- **CRITICAL**: All validations must pass in final run before marking as complete

### 9. Update GitHub Issue (ONLY IF ALL VALIDATIONS PASS)
**CRITICAL**: Only proceed if ALL validations from step 8 have passed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a completion status comment with the following content:
- Note any deviations from the original plan and why
- Document any additional findings or improvements made
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate
- **MANDATORY**: Include validation results showing all tests pass, no lint errors, no type errors

### 10. Capture Implementation Insights and Create Memories
During the implementation process, capture any valuable insights that emerge:
- **Architectural decisions**: Any architectural choices made during implementation
- **Design patterns**: Patterns or approaches that proved effective or problematic
- **Integration insights**: How components work together based on implementation experience
- **Performance considerations**: Any performance implications discovered during implementation
- **Code organization**: Insights about code structure and maintainability

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions made during implementation
- **CTX memories**: For context about why certain implementation approaches were chosen

Add these insights to the GitHub issue comment for future reference.

### 11. Commit Changes
After completing the implementation:
- Stage all implementation changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "feat: implement [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
**CRITICAL**: Implementation is ONLY complete when ALL validations pass:

### MANDATORY Completion Criteria (ALL MUST PASS)
- **ALL tests passing**: 100% test pass rate (pnpm test)
- **NO lint errors**: 0 errors, 0 warnings (pnpm lint)
- **NO type errors**: 0 TypeScript errors (pnpm type-check)
- **ALL checklist items complete**: Every implementation checklist item done
- **Code properly formatted**: Prettier formatting applied (pnpm format)

### Only After ALL Validations Pass:
- All planned functionality is implemented
- Implementation checklist is completed
- Any implementation insights captured as ADR or CTX memories
- GitHub issue is updated with completion status (including validation results)
- Changes committed to git with conventional commit format
- Code is ready for review

**BLOCKING RULE**: If ANY validation fails, implementation is NOT complete and MUST NOT be marked as complete.
