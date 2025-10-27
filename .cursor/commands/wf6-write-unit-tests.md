# Workflow Step: Write Unit Tests

## Purpose
Create comprehensive unit test suite.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Search ARC memories: story_id:STORY-123, status:active
   - Search IMP memories: story_id:STORY-123, status:active
   - Analyze implementation plan to understand test requirements

2. **Identify Test Components**
   - Identify components that need testing for this story
   - Review architectural design for component boundaries
   - Map components to required test coverage

3. **Write Unit Tests**
   - Write unit tests for each component (organized by component, not story)
   - Implement test doubles and mocks where appropriate, be careful not to over-mock: functionality tested must never be mocked!
   - Add edge case and error condition tests
   - Ensure test coverage meets standards
   - Follow existing test patterns and conventions

4. **Ensure Test Quality**
   - Ensure unit tests are component-focused and not story-specific
   - Verify tests are independent and can run in isolation
   - Check that tests provide good coverage of component functionality
   - Validate tests follow testing best practices

5. **Organize Test Files**
   - Organize test files by component/feature, not by story
   - Follow existing test file structure and naming conventions
   - Ensure test files are discoverable and maintainable

## Output
- Unit test files (organized by component)
- Comprehensive test coverage
- Test doubles and mocks
- Edge case and error condition tests

## Success Criteria
- Unit test files created for all components
- Test coverage meets or exceeds standards
- Tests are organized by component, not story
- All edge cases and error conditions tested
- Unit tests ready for implementation validation

**Note**: After completing this step, BDD tests and unit test will FAIL because the actual implementation has not been written yet. This is the expected "red phase" of the TDD/BDD cycle. The implementation will be created in workflow step wf7, which will make both the BDD tests and unit tests pass.

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories
