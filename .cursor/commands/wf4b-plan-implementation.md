# Workflow Step: Plan Implementation

## Purpose
Create detailed implementation plan with testing strategy.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Use MCP tools to retrieve the specific story/issue
   - Analyze story requirements and acceptance criteria, mind story boundaries
   - Review story context and dependencies
   - Find feature files with story ID prefix
   - Search ARC memories: STORY-123, status/active and general ADR memories to understand architectural decisions
   - Analyze BDD scenarios and architecture to better understand requirements

2. **Quality Gate: Architecture Validation**
   - Validate architecture is complete and implementable
   - Ensure all architectural components are defined
   - Verify integration points are clear and feasible
   **⚠️ CRITICAL: If any quality gate criteria are NOT met, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

3. **Plan Testing Strategy**
   - Plan unit test strategy for each component
   - Define test coverage requirements
   - Identify test doubles and mocks needed, be careful not to over-mock: functionality tested must never be mocked!
   - Plan integration testing approach
   - Design end-to-end testing scenarios

4. **Define Implementation Order**
   - Analyze component dependencies
   - Define implementation order and dependencies
   - Identify critical path components
   - Plan incremental implementation approach

5. **Create Implementation Checklist**
   - Break down implementation into specific tasks
   - Define acceptance criteria for each task
   - Identify potential risks and mitigation strategies
   - Plan code organization and file structure

6. **Store Implementation Knowledge**
   - Create IMP memories with implementation plans
   - Tag IMP memories with story ID and status/active
   - Document testing strategies and approaches
   - Store implementation patterns and best practices
   - **⚠️ CRITICAL: Optimize for token efficiency**
     - Use concise bullet points instead of verbose prose
     - Eliminate filler words and explanations
     - Focus on facts: tasks, order, deps, test types only
     - Use abbreviations: TDD, BDD, E2E, CRUD, API, etc.
     - Structure tasks as numbered lists with minimal description
     - Avoid repeating information from titles in content
     - Example format:
       ```markdown
       **Order:** 1.Auth 2.Users 3.Posts
       **Tasks:** 1.AuthService 2.UserRepo 3.AuthTests 4.IntegrationTests
       **Tests:** Unit(90%), Integration(70%), E2E(50%)
       **Mocks:** Database, EmailService; Real: AuthService, UserService
       **Risks:** Race conditions in auth → optimistic locking
       ```

## Output
- IMP memories with implementation plans and strategies
- Detailed testing strategy
- Implementation order and dependencies
- Task breakdown and checklist

## Success Criteria
- IMP memories created with comprehensive implementation plans
- Testing strategy documented and actionable
- Implementation order defined with clear dependencies
- Task checklist created with specific acceptance criteria
- Implementation plan ready for execution

## MCP Tools Required
- Memory Tools: For storing IMP memories and retrieving ARC memories
