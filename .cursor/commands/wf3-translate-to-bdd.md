# Workflow Step: Translate to BDD

## Purpose
Convert a single user story into detailed BDD scenarios.

## Input Required
- Story/Issue ID
- Project management system used (Jira or GitHub)

## Process
1. **Retrieve Story Details**
   - Use MCP tools to retrieve the specific story/issue
   - Analyze story requirements and acceptance criteria, mind story boundaries
   - Review story context and dependencies

2. **Quality Gate: Story Validation**
   - Validate story is complete and ready for BDD translation
   - Ensure acceptance criteria are clear and testable
   - Verify story has sufficient detail for scenario creation
   - **BDD Appropriateness Check**: Determine if this story is suitable for BDD testing
     - ✅ **BDD is appropriate** when the story has:
       - User-facing behavior that can be observed from outside the system
       - Observable outcomes that demonstrate business value
       - End-to-end workflows that can be tested through actual usage
       - Scenarios that can be written from a user's perspective (Given-When-Then)
     - ❌ **BDD is NOT appropriate** when the story is:
       - Foundation/infrastructure setup (package installation, configuration)
       - Code structure verification (interface definitions, type definitions)
       - Internal implementation details (error class definitions, internal APIs)
       - Technical dependencies (SDK setup, library integration)
     - **If BDD is NOT appropriate**: Stop immediately and inform the user that this story should use unit/integration tests instead. Do NOT create BDD scenarios for foundation/infrastructure stories.
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

3. **Write Gherkin Feature Files**
   - **Only proceed if BDD appropriateness check passed in step 2**
   - Create feature files prefixed with story ID
   - Define Given-When-Then scenarios based on acceptance criteria
   - Focus on **observable user behavior**, not implementation details
   - Test **what the system does**, not **how it's implemented**
   - Avoid scenarios that check for code structure, file existence, or internal implementation
   - Include background steps for common setup
   - Add data tables and scenario outlines where appropriate

4. **Validate Scenarios**
   - Ensure scenarios cover all acceptance criteria
   - Verify scenarios are testable and implementable
   - Check that scenarios follow Gherkin best practices
   - Validate scenarios against story requirements
   - **BDD Quality Check**: Verify scenarios test observable behavior:
     - ✅ Scenarios should test what users can do and what outcomes they see
     - ✅ Scenarios should be written from a user's perspective
     - ❌ Scenarios should NOT check for file existence, code structure, or string patterns in source files
     - ❌ Scenarios should NOT verify implementation details (interfaces, types, classes)
     - If scenarios are too implementation-focused, refactor them to test behavior instead

## Output
- Feature files with Gherkin scenarios (prefixed with story ID)
- Comprehensive scenario coverage
- Testable BDD specifications

## Success Criteria
- Feature files created with story ID prefix
- All acceptance criteria translated to scenarios
- Scenarios follow Given-When-Then structure
- Feature files ready for step definition implementation
- BDD specifications complete and testable

## MCP Tools Required
- Jira MCP OR GitHub MCP: For retrieving story/issue details
