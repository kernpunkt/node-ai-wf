# Workflow Step: Create Pull Request

## Purpose
Package implementation for review and integration.

## Input Required
- Story/Issue ID

## Process
1. **Gather Implementation Context**
   - Review all files created or modified for this story
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active
   - Search DOC memories: STORY-123, status/active
   - Search SEC memories: STORY-123, status/active

2. **Update Memory Statuses**
   - Update all active memories for this story from status/active to status/implemented
   - Update ARC memories: Remove status/active tag, add status/implemented tag
   - Update IMP memories: Remove status/active tag, add status/implemented tag
   - Update DOC memories: Remove status/active tag, add status/implemented tag
   - Update SEC memories: Remove status/active tag, add status/implemented tag
   - **Note**: ADR memories should remain active as they are architectural decisions that apply beyond the current story

3. **Create Feature Branch**
   - Create feature branch with descriptive name
   - Ensure branch name follows project conventions
   - Base branch on appropriate main/develop branch

4. **Prepare Pull Request Description**
   - Write detailed PR description including:
     - Summary of changes and implementation
     - Reference to original story/issue
     - List of files modified/created
     - Testing approach and coverage
     - Documentation updates
   - Include architectural decisions and rationale
   - Reference related memories and documentation

5. **Include Testing Instructions**
   - Provide clear testing instructions
   - Include BDD test execution steps
   - Document unit test coverage
   - Include integration testing guidance
   - Provide manual testing scenarios

6. **Add Documentation Links**
   - Link to relevant DOC memories
   - Include API documentation references
   - Link to architectural documentation
   - Reference troubleshooting guides
   - Include usage examples

7. **Validate Pull Request**
   - Ensure all tests pass
   - Verify code quality standards are met
   - Check that all acceptance criteria are addressed
   - Validate documentation is complete

## Output
- Pull request with comprehensive description
- Feature branch with all implementation
- Testing instructions and validation
- Documentation links and references
- Memory statuses updated to status/implemented

## Success Criteria
- Pull request created with comprehensive description
- Feature branch contains all implementation
- Testing instructions are clear and complete
- Documentation links are accurate and helpful
- Memory statuses updated to status/implemented (except ADR memories)
- Pull request ready for review and integration

## MCP Tools Required
- Memory Tools: For retrieving and updating ARC, IMP, DOC, and SEC memories
- GitHub MCP: For creating pull request (if using GitHub)
