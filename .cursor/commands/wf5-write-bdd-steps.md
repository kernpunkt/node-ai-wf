# Workflow Step: Write BDD Steps

## Purpose
Implement BDD step definitions.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active

2. **Quality Gate: Implementation Plan Validation**
   - Validate implementation plan is complete and feasible
   - Ensure all architectural components are defined
   - Verify testing strategy is comprehensive
   - **BDD Appropriateness Validation**: Review the feature file to ensure it's appropriate for BDD
     - Check if scenarios test observable user behavior rather than implementation details
     - Verify scenarios don't check for file existence, code structure, or string patterns
     - If the feature file contains structural/implementation checks, stop and inform the user that:
       - Foundation/infrastructure stories should use unit/integration tests
       - BDD should be reserved for user-facing behavior
       - The feature file may need to be refactored or removed
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

3. **Analyze Existing Steps**
   - Search existing step definition files for reusable steps
   - Identify common patterns and reusable components
   - Analyze step definition structure and organization

4. **Understand Requirements**
   - Analyze BDD scenarios to understand step requirements
   - Understand architectural constraints and integration points
   - Map scenarios to required step implementations

5. **Write Step Definitions**
   - Write new step definitions in TypeScript
   - Implement Given-When-Then steps based on architecture and implementation plans
   - **Focus on testing observable behavior**, not implementation details:
     - ✅ Test actual functionality (e.g., "I can create a provider and use it")
     - ✅ Test user-visible outcomes (e.g., "the command executes successfully")
     - ✅ Test real workflows (e.g., "I can send a request and receive a response")
     - ❌ Do NOT check for file existence or code structure
     - ❌ Do NOT use string matching to verify implementation details
     - ❌ Do NOT test internal APIs or implementation patterns
   - Add data tables and scenario outlines support
   - Ensure step definitions are reusable and not story-specific
   - Follow existing step definition patterns and conventions

6. **Validate Step Definitions**
   - Validate step definitions against scenarios
   - Ensure all scenario steps have corresponding implementations
   - Verify step definitions are reusable across components
   - Test step definitions for correctness and completeness

## Output
- Reusable BDD step definition files
- Step implementations for all scenario steps
- Data table and scenario outline support
- Reusable step patterns and utilities

## Success Criteria
- Step definition files created with comprehensive implementations
- All BDD scenario steps implemented
- Step definitions are reusable across components
- Data tables and scenario outlines supported
- Step definitions ready for test execution

**Note**: After completing this step, BDD tests will FAIL because the actual implementation has not been written yet. This is the expected "red phase" of the TDD/BDD cycle. The implementation will be created in workflow steps wf6 (unit tests) and wf7 (implementation), which will make the BDD tests pass.

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories
