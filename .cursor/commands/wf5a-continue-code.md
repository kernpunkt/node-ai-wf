# Workflow Step 5a: Continue Writing Code

## Objective
Resume code implementation when interrupted during wf5, analyzing what has been completed and what remains to be done, then continuing from where the work was left off.

## Instructions

### 1. Analyze Current State and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the implementation plan and step-by-step implementation checklist from the comments
- **CRITICAL**: Review the "Issue Scope and Boundaries" section to understand what is and isn't included
- Examine the current code implementation to understand what has already been completed
- Identify any partial implementations or incomplete features
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to implementation approaches or similar functionality
  - Search for CTX memories that provide context about implementation decisions or architectural patterns
  - Search for DOC memories that document implementation patterns or technical approaches
  - Link to related memories when they provide valuable context for completing the implementation task

### 1b. Scope Boundary Validation (CRITICAL)
Before resuming implementation, ensure you understand and respect the issue boundaries:
- **Review scope exclusions**: What functionality is explicitly NOT included in this issue?
- **Check related issues**: Are there other open issues that cover related functionality?
- **Stay focused**: Only implement what is explicitly included in the current issue
- **Avoid scope creep**: Do not add features that belong to other issues, even if they seem related
- **Reference boundaries**: Keep the scope boundaries visible during implementation
- **Validate existing work**: Ensure any already completed work stays within the defined scope

### 1a. Package Documentation Lookup (Context7 MCP)
When completing implementation that uses pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up current documentation when you're unsure about package usage
- Search for specific code examples when you need clarification on remaining implementation requirements
- Look up API references for advanced features or edge cases you're not familiar with
- Find troubleshooting guides when you encounter issues during partial implementation
- Reference package-specific configuration or setup requirements when you need clarification

### 2. Assess Completion Status
Analyze what has been completed vs. what remains:

#### Completed Work
- Identify which parts of the implementation checklist have been completed
- Review existing code implementations and their functionality
- Note any features that are already working
- Document any infrastructure or components that are already in place

#### Remaining Work
- Identify which items from the implementation checklist haven't been completed yet
- Note any incomplete implementations that need to be finished
- Assess if the implementation plan needs adjustment based on what's been learned
- Identify any dependencies that may have changed

### 3. Resume Implementation
Continue from where the work was interrupted:

#### Scope Boundary Compliance (CRITICAL)
- **CRITICAL**: Stay within the defined issue scope and boundaries at all times
- **Scope Check**: Before implementing any feature, verify it's explicitly included in the issue scope
- **Avoid scope creep**: Do not add features that belong to other issues, even if they seem related
- **Validate existing work**: Ensure any already completed work stays within the defined scope

#### For New Features or Bugs:
- Complete any partially implemented features
- Finish implementing remaining items from the checklist
- Follow the TDD cycle (Red → Green → Refactor) for any new work
- Ensure all planned functionality is implemented according to the plan

#### For Refactoring:
- Complete any remaining refactoring tasks from the checklist
- Ensure all existing functionality continues to work
- Maintain the safety net of passing tests throughout the process

### 4. Validate Current Implementation
- **Scope validation**: Ensure all implemented functionality stays within the defined issue boundaries
- Run tests to ensure existing functionality still works
- Verify that the current implementation aligns with the planned approach
- Identify any gaps or areas that need additional work
- Ensure code follows project conventions and patterns

### 5. Complete the Implementation
- Finish implementing all remaining items from the checklist
- Ensure all planned functionality is working correctly
- Verify that the implementation meets the requirements from step 2
- Confirm that code quality standards are met

### 6. Testing During Completion
- Run tests frequently to catch issues early
- For new features: Verify that all tests now pass
- For refactoring: Verify that all existing tests continue to pass
- Address any test failures immediately before proceeding

### 7. MANDATORY Final Validation (BLOCKING - MUST PASS)
**CRITICAL**: ALL of these validations MUST pass before proceeding to completion. If ANY fail, implementation is NOT complete:

#### 7.1 Test Validation (BLOCKING)
- **MANDATORY**: Run `pnpm test` and verify ALL tests pass
- **BLOCKING**: If ANY tests fail, implementation is NOT complete
- **CRITICAL**: Address all test failures before proceeding

#### 7.2 Lint Validation (BLOCKING)
- **MANDATORY**: Run `pnpm lint` and verify NO errors or warnings
- **BLOCKING**: If ANY lint errors exist, implementation is NOT complete
- **CRITICAL**: Fix all lint errors before proceeding

#### 7.3 Type Safety Validation (BLOCKING)
- **MANDATORY**: Run `pnpm type-check` and verify NO TypeScript errors
- **BLOCKING**: If ANY type errors exist, implementation is NOT complete
- **CRITICAL**: Fix all type errors before proceeding

#### 7.4 Implementation Checklist Validation (BLOCKING)
- **MANDATORY**: Verify that ALL items in the implementation checklist are completed
- **BLOCKING**: If ANY checklist items are incomplete, implementation is NOT complete
- **CRITICAL**: Complete all remaining checklist items before proceeding

#### 7.5 Code Formatting (BLOCKING)
- **MANDATORY**: Run `pnpm format` to ensure consistent code formatting
- **BLOCKING**: If formatting changes are needed, apply them and re-validate
- **CRITICAL**: Code must be properly formatted before completion

#### 7.6 Final Validation Run (BLOCKING)
- **MANDATORY**: After formatting, re-run ALL validation steps:
  - `pnpm test` - ALL tests must pass
  - `pnpm lint` - NO errors or warnings
  - `pnpm type-check` - NO type errors
- **BLOCKING**: If ANY validation fails after formatting, implementation is NOT complete
- **CRITICAL**: All validations must pass in final run before marking as complete

### 8. Update GitHub Issue (ONLY IF ALL VALIDATIONS PASS)
**CRITICAL**: Only proceed if ALL validations from step 7 have passed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a completion status comment with the following content:
- Note any deviations from the original plan and why
- Document any additional findings or improvements made
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate
- **MANDATORY**: Include validation results showing all tests pass, no lint errors, no type errors

### 9. Capture Implementation Completion Insights and Create Memories
During the implementation completion process, capture any additional insights that emerge:
- **Architectural decisions**: Any architectural choices made while completing implementation
- **Design patterns**: Patterns or approaches that proved effective or problematic
- **Integration insights**: How components work together based on completion experience
- **Performance considerations**: Any performance implications discovered during completion
- **Code organization**: Insights about code structure and maintainability

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions made during implementation completion
- **CTX memories**: For context about why certain implementation approaches were chosen

Add these insights to the GitHub issue comment for future reference.

### 10. Commit Changes
After completing the implementation continuation:
- Stage all implementation changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "feat: complete implementation of [feature/component name]"`
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
- Any implementation completion insights captured as ADR or CTX memories
- GitHub issue is updated with completion status (including validation results)
- Changes committed to git with conventional commit format
- Code is ready for review

**BLOCKING RULE**: If ANY validation fails, implementation is NOT complete and MUST NOT be marked as complete.
