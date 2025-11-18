# Workflow Step: Validate Implementation

## Purpose
Validate implementation meets BDD scenario requirements.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search IMP memories: STORY-123, status/active

2. **Code Formatting and Linting**
   - Run Prettier formatting: `pnpm format`
   - Run ESLint auto-fix: `pnpm lint:fix`
   - **If ESLint issues remain**: Fix remaining linting issues manually
   - Ensure code follows project formatting standards

3. **Test Execution**
   - Run BDD tests for implemented scenario
   - **If BDD tests fail**: Analyze failure, fix implementation issues, and retry
   - Verify unit tests pass
   - **If Unit tests fail**: Analyze failure, fix issues, and retry
   - Verify unit test coverage meets standards

4. **Quality Validation**
   - Check code quality and standards compliance
   - Validate against acceptance criteria
   - Review implementation against architectural decisions
   - Ensure error handling is comprehensive

5. **Iterative Validation**
   - **Repeat validation cycle until all checks pass**
   - Fix any issues identified during validation
   - Re-run tests and checks after each fix
   - Ensure all quality gates are met

## Output
- Validated implementation with formatted and linted code
- All tests passing
- Code quality standards met
- Acceptance criteria validated

## Success Criteria
- Implementation passes all validation checks
- Code is properly formatted and linted
- BDD scenario passes
- Unit tests pass with good coverage
- Code quality standards met
- Implementation ready for review

## MCP Tools Required
- Memory Tools: For retrieving IMP memories
