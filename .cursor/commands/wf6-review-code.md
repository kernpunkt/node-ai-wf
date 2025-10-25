# Workflow Step 6: Review Code

## Objective
Perform a critical, concise code review that identifies real issues and blocks production deployment if build/lint errors or failing tests exist.

## Instructions

### 1. Pre-Review Validation (CRITICAL - MUST PASS)
**BLOCKING**: If any of these fail, the review MUST be marked as "BLOCKED - NOT READY FOR PRODUCTION":

#### 1.1 Build Validation
- Run `pnpm build` and verify it completes successfully
- **FAILURE = BLOCKED**: Any build errors must be fixed before approval

#### 1.2 Lint Validation  
- Run `pnpm lint` and verify no errors or warnings
- **FAILURE = BLOCKED**: Any lint errors must be fixed before approval

#### 1.3 Test Validation
- Run `pnpm test` and verify all tests pass
- **FAILURE = BLOCKED**: Any failing tests must be fixed before approval

#### 1.4 Type Safety Validation
- Run `pnpm type-check` and verify no TypeScript errors
- **FAILURE = BLOCKED**: Any type errors must be fixed before approval

### 2. Read GitHub Issue and Search Relevant Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the implementation plan and current implementation status from the comments
- Understand what was implemented and the context
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to code review patterns or similar functionality
  - Search for CTX memories that provide context about code quality decisions or architectural patterns
  - Search for DOC memories that document code review approaches or quality standards
  - Link to related memories when they provide valuable context for the current code review task

### 3. Critical Code Review (Focus on Real Issues Only)
**REVIEW PRINCIPLE**: Be critical, concise, and focus only on issues that matter for production quality.

#### 3.1 Critical Issues (BLOCKING)
- **Security vulnerabilities**: Authentication bypass, data exposure, injection risks
- **Performance problems**: Memory leaks, infinite loops, blocking operations
- **Data integrity issues**: Race conditions, data corruption risks
- **User experience blockers**: Broken functionality, accessibility violations
- **Architecture violations**: Violations of established ADRs or architectural principles

#### 3.2 Code Quality Issues (NON-BLOCKING but should be noted)
- **Naming clarity**: Only flag if names are genuinely confusing or misleading
- **Function complexity**: Only flag if functions are genuinely too complex to understand
- **Code duplication**: Only flag if duplication creates maintenance risks
- **Error handling**: Only flag if error handling is missing or inappropriate

#### 3.3 Project Rules Compliance
- **TypeScript compliance**: No `any` types, proper type safety
- **German UI compliance**: User-facing text in German, code in English
- **Coding standards**: Follow established project conventions
- **Architectural patterns**: Adhere to project's architectural patterns

### 4. ADR Compliance Check
- Search through our memories for any Architecture Decision Records (ADRs)
- Check if the implementation violates any established architectural decisions
- **BLOCKING**: Any ADR violations must be addressed before approval

### 5. Concise Review Documentation
Document the review results in the GitHub issue:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Code Review Results" comment with the following content:

#### 5.1 Review Status (REQUIRED)
- **APPROVED**: All validations pass, no blocking issues found
- **BLOCKED**: Build/lint/test failures or critical issues found
- **CONDITIONAL**: Minor issues found that should be addressed but don't block production

#### 5.2 Validation Results (REQUIRED)
- Build status: ✅ PASS / ❌ FAIL
- Lint status: ✅ PASS / ❌ FAIL  
- Test status: ✅ PASS / ❌ FAIL
- Type check status: ✅ PASS / ❌ FAIL

#### 5.3 Issues Found (Only if any exist)
- **BLOCKING ISSUES**: List critical issues that must be fixed
- **MINOR ISSUES**: List non-blocking issues that should be addressed
- **SPECIFIC EXAMPLES**: Include file names, line numbers, and exact issues
- **NO PRAISE**: Do not include positive feedback or praise - focus only on issues

### 6. Issue Resolution Planning (Only if issues found)
- **BLOCKING ISSUES**: Must be fixed before approval
- **MINOR ISSUES**: Can be addressed in future iterations
- Add specific action items with file references and line numbers

### 7. Capture Review Insights and Create Memories (Only if significant)
Create memories only for significant architectural decisions or patterns:
- **ADR memories**: For significant architectural decisions or patterns discovered during review
- **CTX memories**: For context about why certain code quality issues exist or how they should be addressed

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

### 8. Commit Changes
After completing the code review:
- Stage all review-related changes (issue updates): `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "docs: add code review results for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- **BLOCKING VALIDATION**: Build, lint, test, and type-check all pass
- **CRITICAL REVIEW**: Only real production-quality issues identified
- **CONCISE DOCUMENTATION**: Clear status (APPROVED/BLOCKED/CONDITIONAL) with specific issues
- **NO SYCOPHANTIC PRAISE**: Focus only on problems that need fixing
- **PRODUCTION READINESS**: Clear indication of whether code is ready for production
- **ACTIONABLE FEEDBACK**: Specific file references and line numbers for any issues
- Changes committed to git with conventional commit format
