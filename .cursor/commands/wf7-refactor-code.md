# Workflow Step 7: Refactor Code

## Objective
Refactor the implementation based on the code review findings to address quality issues, architectural concerns, and ensure compliance with project standards and ADRs.

## Instructions

### 1. Read GitHub Issue and Search Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- **CRITICAL**: Review the "Issue Scope and Boundaries" section to understand what is and isn't included
- Review the "Code Review Results" section from step 6 from the comments
- Understand what issues need to be addressed and their priorities
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to refactoring approaches or similar functionality
  - Search for CTX memories that provide context about refactoring decisions or architectural patterns
  - Search for DOC memories that document refactoring patterns or best practices
  - Link to related memories when they provide valuable context for the current refactoring task

### 1b. Scope Boundary Validation (CRITICAL)
Before starting refactoring, ensure you understand and respect the issue boundaries:
- **Review scope exclusions**: What functionality is explicitly NOT included in this issue?
- **Stay focused**: Only refactor code that is explicitly included in the current issue
- **Avoid scope creep**: Do not refactor or improve code that belongs to other issues
- **Reference boundaries**: Keep the scope boundaries visible during refactoring

### 1a. Package Documentation Lookup (Context7 MCP)
When refactoring code that uses pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up current documentation when you're unsure about proper package usage patterns
- Search for refactoring examples and best practices when you need guidance on improving package integrations
- Look up API references for packages when you need to understand better ways to use them
- Find performance optimization guides when refactoring involves performance improvements for specific packages
- Reference package-specific configuration or setup requirements when you need clarification on proper setup

### 2. Refactoring Planning
- Review the action items and recommendations from the code review
- Prioritize refactoring tasks based on severity and impact
- Plan the refactoring approach to minimize risk
- Determine if any refactoring requires additional tests

### 3. Execute Refactoring Tasks
Address issues identified in the review:

#### Scope Boundary Compliance (CRITICAL)
- **CRITICAL**: Stay within the defined issue scope and boundaries at all times
- **Scope Check**: Before refactoring any code, verify it's explicitly included in the issue scope
- **Avoid scope creep**: Do not refactor or improve code that belongs to other issues
- **Focus on current issue**: Only refactor code that is part of the current issue's implementation

#### Code Quality Issues
- **Naming**: Improve variable, function, and class names for clarity
- **Function Structure**: Break down large functions, improve single responsibility
- **Code Organization**: Restructure code for better logical flow
- **Comments**: Add or improve meaningful comments explaining the "why"
- **Error Handling**: Improve error handling consistency and clarity
- **DRY Violations**: Extract common functionality to eliminate duplication

#### Project Rules Compliance
- Align code with established project conventions
- Ensure consistency with existing patterns
- Fix any violations of project-specific guidelines

#### Architectural Improvements
- Correct dependency direction issues
- Improve separation of concerns
- Align with project architectural principles
- Fix any architectural anti-patterns

#### ADR Compliance
- Modify implementation to align with Architecture Decision Records
- Ensure no violations of established architectural decisions

### 4. Testing During Refactoring
- **Critical**: Run tests after each refactoring change
- Ensure all existing tests continue to pass
- Verify that functionality remains intact
- Add any new tests needed for refactored code

### 5. Iterative Refactoring
- Make small, incremental changes
- Test after each change
- Commit refactoring changes separately from feature changes
- Maintain working code throughout the process

### 6. Validation
- Verify that all identified issues from the review are addressed
- Ensure code quality standards are now met
- Confirm architectural compliance
- Validate that ADR violations are resolved

### 7. Code Formatting and Quality Validation
- Run Prettier to ensure consistent code formatting: `pnpm format`
- Verify ESLint shows no errors or warnings: `pnpm lint`
- Verify type safety: pnpm `pnpm type-check`
- Fix any formatting, linting or type issues found
- Re-run tests to ensure formatting changes didn't break anything

### 8. Update GitHub Issue
After refactoring is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Refactoring Results" comment with the following content:
- Document what was refactored and why
- Note any additional improvements made during refactoring
- Update any existing checklists to mark completed items as done
- Update the overall review status

### 9. Capture Refactoring Insights and Create Memories
During the refactoring process, capture any valuable insights that emerge:
- **Architectural improvements**: Any architectural patterns or structures that were improved
- **Code organization insights**: How refactoring revealed better ways to organize code
- **Design pattern applications**: Any design patterns that were applied or discovered
- **Integration improvements**: How refactoring improved component interactions
- **Maintainability gains**: Specific improvements to code maintainability

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions made during refactoring
- **CTX memories**: For context about why certain refactoring approaches were chosen

Add these insights to the GitHub issue comment for future reference.

### 10. Commit Changes
After completing the refactoring:
- Stage all refactoring changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "refactor: improve code quality for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- All code review issues are addressed
- Code quality is improved and meets standards
- Architectural compliance is achieved
- ADR violations are resolved
- All tests continue to pass
- Code is properly formatted with Prettier
- ESLint shows no errors or warnings
- Any refactoring insights captured as ADR or CTX memories
- Changes committed to git with conventional commit format
- Implementation is ready for documentation
