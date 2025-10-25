# Workflow Step 7a: Continue Refactoring Code

## Objective
Resume code refactoring when interrupted during wf7, analyzing what has been completed and what remains to be done, then continuing from where the refactoring work was left off.

## Instructions

### 1. Analyze Current State and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- **CRITICAL**: Review the "Issue Scope and Boundaries" section to understand what is and isn't included
- Review the "Code Review Results" section from step 6 from the comments
- Examine the current code implementation to understand what refactoring has already been completed
- Identify any partial refactoring work or incomplete improvements
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to refactoring approaches or similar functionality
  - Search for CTX memories that provide context about refactoring decisions or architectural patterns
  - Search for DOC memories that document refactoring patterns or best practices
  - Link to related memories when they provide valuable context for completing the refactoring task

### 1b. Scope Boundary Validation (CRITICAL)
Before resuming refactoring, ensure you understand and respect the issue boundaries:
- **Review scope exclusions**: What functionality is explicitly NOT included in this issue?
- **Stay focused**: Only refactor code that is explicitly included in the current issue
- **Avoid scope creep**: Do not refactor or improve code that belongs to other issues
- **Reference boundaries**: Keep the scope boundaries visible during refactoring
- **Validate existing work**: Ensure any already completed refactoring stays within the defined scope

### 1a. Package Documentation Lookup (Context7 MCP)
When completing refactoring that uses pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up current documentation when you're unsure about proper package usage patterns
- Search for refactoring examples and best practices when you need guidance on improving package integrations
- Look up API references for packages when you need to understand better ways to use them
- Find performance optimization guides when refactoring involves performance improvements for specific packages
- Reference package-specific configuration or setup requirements when you need clarification on proper setup

### 2. Assess Refactoring Completion Status
Analyze what has been completed vs. what remains:

#### Completed Refactoring
- Identify which code review issues have already been addressed
- Review existing refactored code and its improvements
- Note any areas that have already been improved
- Document any refactoring infrastructure that's already in place

#### Remaining Refactoring Work
- Identify which action items from the code review still need to be addressed
- Note any incomplete refactoring that needs to be finished
- Assess if the refactoring priorities need adjustment based on what's been learned
- Identify any new issues that may have been discovered during partial refactoring

### 3. Resume Refactoring Tasks
Continue from where the refactoring work was interrupted:

#### Code Quality Issues
- Complete any partially addressed naming improvements
- Finish restructuring large functions for better single responsibility
- Complete code organization improvements for better logical flow
- Finish adding or improving meaningful comments
- Complete error handling consistency improvements
- Finish extracting common functionality to eliminate DRY violations

#### Project Rules Compliance
- Complete any remaining alignment with established project conventions
- Finish ensuring consistency with existing patterns
- Complete fixing any violations of project-specific guidelines

#### Architectural Improvements
- Complete any remaining dependency direction corrections
- Finish improving separation of concerns
- Complete alignment with project architectural principles
- Finish fixing any architectural anti-patterns

#### ADR Compliance
- Complete any remaining modifications to align with Architecture Decision Records
- Ensure no violations of established architectural decisions remain

### 4. Validate Current Refactoring State
- Run tests to ensure existing functionality still works after partial refactoring
- Verify that the current refactoring aligns with the planned improvements
- Identify any gaps or areas that need additional refactoring work
- Ensure refactored code follows project conventions and patterns

### 5. Complete the Refactoring
- Finish addressing all remaining action items from the code review
- Ensure all identified issues are resolved
- Verify that code quality standards are now met
- Confirm architectural compliance is achieved
- Validate that ADR violations are resolved

### 6. Testing During Refactoring Completion
- **Critical**: Run tests after each refactoring change
- Ensure all existing tests continue to pass
- Verify that functionality remains intact
- Add any new tests needed for refactored code

### 7. Iterative Refactoring Completion
- Make small, incremental changes to complete remaining work
- Test after each change
- Maintain working code throughout the process
- Ensure all refactoring goals are achieved

### 8. Final Validation
- Verify that all identified issues from the review are addressed
- Ensure code quality standards are now met
- Confirm architectural compliance
- Validate that ADR violations are resolved
- Ensure all tests continue to pass

### 9. Code Formatting and Quality Validation
- Run Prettier to ensure consistent code formatting: `pnpm format`
- Verify ESLint shows no errors or warnings: `pnpm lint`
- Verify type safety: pnpm `pnpm type-check`
- Fix any formatting, linting or type issues found
- Re-run tests to ensure formatting changes didn't break anything

### 10. Update GitHub Issue
After refactoring is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Refactoring Completion Results" comment with the following content:
- Document what was completed during this continuation session
- Note any additional improvements made during completion
- Update any existing checklists to mark completed items as done
- Update the overall review status

### 11. Capture Refactoring Completion Insights and Create Memories
During the refactoring completion process, capture any additional insights that emerge:
- **Architectural improvements**: Any architectural patterns or structures that were improved during completion
- **Code organization insights**: How completing the refactoring revealed better ways to organize code
- **Design pattern applications**: Any design patterns that were applied or discovered during completion
- **Integration improvements**: How refactoring completion improved component interactions
- **Maintainability gains**: Specific improvements to code maintainability achieved during completion

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions made during refactoring completion
- **CTX memories**: For context about why certain refactoring approaches were chosen

Add these insights to the GitHub issue comment for future reference.

### 12. Commit Changes
After completing the refactoring continuation:
- Stage all refactoring changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "refactor: complete code quality improvements for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- All code review issues are addressed
- Code quality is improved and meets standards
- Architectural compliance is achieved
- ADR violations are resolved
- All tests continue to pass
- Code is properly formatted with Prettier
- ESLint shows no errors or warnings
- Any refactoring completion insights captured as ADR or CTX memories
- Changes committed to git with conventional commit format
- Implementation is ready for documentation
