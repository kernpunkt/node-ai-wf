# Workflow Step: Translate to BDD

## Purpose
Convert a single user story into detailed BDD scenarios.

## Input Required
- Story/Issue ID
- Project management system used (Jira or GitHub)

## Process
1. **Retrieve Story Details**
   - Use MCP tools to retrieve the specific story/issue
   - Analyze story requirements and acceptance criteria
   - Review story context and dependencies

2. **Quality Gate: Story Validation**
   - Validate story is complete and ready for BDD translation
   - Ensure acceptance criteria are clear and testable
   - Verify story has sufficient detail for scenario creation
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

3. **Write Gherkin Feature Files**
   - Create feature files prefixed with story ID
   - Define Given-When-Then scenarios based on acceptance criteria
   - Include background steps for common setup
   - Add data tables and scenario outlines where appropriate

4. **Validate Scenarios**
   - Ensure scenarios cover all acceptance criteria
   - Verify scenarios are testable and implementable
   - Check that scenarios follow Gherkin best practices
   - Validate scenarios against story requirements

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
- Memory Tools: For storing BDD context and patterns
- Jira MCP OR GitHub MCP: For retrieving story/issue details
