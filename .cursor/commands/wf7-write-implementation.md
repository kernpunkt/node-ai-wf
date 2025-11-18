# Workflow Step: Write Implementation

## Purpose
Implement BDD scenarios.

## Input Required
- Story/Issue ID

## Process
1. **Quality Gate: Unit Test Validation**
   - Validate unit tests are comprehensive and complete
   - Ensure all components have corresponding unit tests
   - Verify test coverage meets standards
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

2. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active

3. **Analyze Requirements**
   - Analyze BDD scenarios and implementation plan to understand requirements
   - Identify components that need implementation for this story
   - Map scenarios to required implementations

4. **Implement Code**
   - Implement code to make BDD scenarios pass
   - Ensure all related unit tests pass
   - Follow clean code standards and project conventions
   - Add error handling and validation
   - Ensure implementation files are organized by component/feature, not story

5. **Validate Implementation**
   - Verify implementation makes the target BDD scenarios pass
   - Ensure all related unit tests pass
   - Check code quality and standards compliance
   - Validate against architectural decisions

## Output
- Implementation files (organized by component/feature)
- Code that passes BDD scenarios (green phase after red phase in wf5-wf6)
- Unit tests that pass
- Clean, maintainable code

## Success Criteria
- Implementation files created with working code
- Target BDD scenarios passes
- All related unit tests pass
- Code follows project standards and conventions
- Implementation is organized by component/feature
- Code is clean, maintainable, and well-documented

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories
