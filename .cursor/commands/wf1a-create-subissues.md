# Workflow Step 1a: Create Sub-Issues

## Objective
Break down large, complex GitHub issues into smaller, manageable sub-issues that can each be completed in a single LLM session, maintaining the same quality standards as the parent issue.

## Instructions

### 1. Analyze Parent Issue and Search Relevant Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Identify the scope and complexity of the parent issue
- Determine if the issue is too large for a single LLM session
- Assess the logical boundaries for breaking down the work
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to issue breakdown approaches or similar functionality
  - Search for CTX memories that provide context about issue sizing or complexity decisions
  - Search for DOC memories that document issue breakdown patterns or best practices
  - Link to related memories when they provide valuable context for the current breakdown task

### 2. Sub-Issue Breakdown Strategy
Analyze the parent issue to identify natural divisions:
- **Feature-based breakdown**: Split by distinct functional areas
- **Component-based breakdown**: Split by different UI components or modules
- **Phase-based breakdown**: Split by implementation phases or dependencies
- **Data-based breakdown**: Split by different data models or entities

Ask clarifying questions to understand:
- What are the distinct functional pieces?
- Which parts can be developed independently?
- What are the dependencies between different parts?
- What is the logical order of implementation?

### 3. Sub-Issue Sizing Guidelines
Each sub-issue should be sized for single LLM session completion:
- **Scope**: Should be implementable in 1-2 hours of focused work
- **Complexity**: Should involve 1-3 related components or functions
- **Dependencies**: Should have minimal external dependencies
- **Testing**: Should be testable as a cohesive unit

### 4. Sub-Issue Structure Planning
Plan the relationship between sub-issues:
- **Dependency order**: Which sub-issues must be completed first?
- **Parallel work**: Which sub-issues can be worked on simultaneously?
- **Integration points**: How will sub-issues connect to form the complete solution?
- **Parent-child relationship**: How does each sub-issue contribute to the parent goal?

### 5. Sub-Issue Creation Guidelines
Each sub-issue must follow the same quality standards as the parent issue:

#### Sub-Issue Title
- Use clear, descriptive titles that indicate the specific goal
- Follow the pattern: "Action: Specific Sub-Goal"
- Include parent issue reference: "Action: Specific Sub-Goal (Part of #X)"
- Examples:
  - "Add user login form (Part of #123)"
  - "Implement JWT token validation (Part of #123)"
  - "Create user authentication middleware (Part of #123)"

#### Sub-Issue Description
Include only the essential information:
- **Parent Issue**: Reference to the parent issue this sub-issue belongs to
- **Problem/Goal**: What specific part needs to be accomplished
- **Context**: Why this sub-issue is needed and how it fits into the larger goal
- **Expected Outcome**: What success looks like for this specific piece
- **Scope**: What is and isn't included in this sub-issue
- **Acceptance Criteria**: How we'll know this specific piece is complete
- **Dependencies**: What other sub-issues or components this depends on

#### What NOT to Include
- Implementation details or technical solutions
- Code examples or specific approaches
- Step-by-step instructions
- Technical architecture decisions

### 6. Sub-Issue Creation Process
Once the breakdown is planned:
- Create each sub-issue with the agreed-upon content
- Use appropriate labels (feature, bug, enhancement, etc.)
- Set appropriate priority based on dependency order
- Link sub-issues to the parent issue using GitHub's linking features
- Use the github-mcp tools to add the sub-issues to the parent-issue
- Provide the sub-issue numbers to the user for reference

### 7. Reflection and Self-Assessment
Before finalizing the sub-issues, take a moment to reflect on the breakdown completed:
- **Breakdown Quality Review**: Re-examine the sub-issue breakdown with fresh perspective
  - Is each sub-issue appropriately sized for single LLM session completion?
  - Are the logical boundaries between sub-issues clear and well-defined?
  - Do the sub-issue titles clearly indicate their specific scope?
  - Are the acceptance criteria for each sub-issue measurable and complete?
- **Dependency Analysis**: Review the planned dependency relationships
  - Are the dependencies between sub-issues logical and necessary?
  - Is the implementation order optimal for development efficiency?
  - Are there any circular dependencies or missing dependencies?
  - Can any sub-issues be developed in parallel to improve efficiency?
- **Coverage Completeness**: Ensure the breakdown covers the full parent issue scope
  - Do the sub-issues collectively address all aspects of the parent issue?
  - Are there any gaps or overlaps in the sub-issue coverage?
  - Is the parent issue scope appropriately distributed across sub-issues?
- **Self-Correction**: If reflection reveals issues or improvements needed
  - Adjust sub-issue sizing if they're too large or too small
  - Refine sub-issue boundaries if they're unclear or overlapping
  - Reorganize dependencies if the order isn't optimal
  - Add missing sub-issues or merge redundant ones if needed
  - Update sub-issue descriptions to better reflect their scope

### 8. Validation and Approval
After reflection and any necessary adjustments:
- Confirm with the user that the breakdown is logical and complete
- Verify that each sub-issue is appropriately sized for single-session work
- Ensure the user understands the dependency order and relationships
- Confirm that the sub-issues collectively cover the parent issue scope
- Note that the "how" will be defined in the next workflow steps

### 9. Implementation Planning
Provide guidance on how to proceed:
- Recommend which sub-issue to tackle first
- Explain the dependency relationships
- Suggest the optimal order for implementation
- Note that each sub-issue can follow the full workflow (wf1-wf6)

## Expected Outcome
- Large parent issue broken down into manageable sub-issues
- Each sub-issue sized appropriately for single LLM session completion
- Clear dependency relationships and implementation order established
- Sub-issues maintain the same quality standards as the parent issue
- User approval and understanding of the breakdown approach
- Sub-issues ready for individual implementation following the full workflow

## Target Audience
This step is designed for human interaction to ensure accurate issue breakdown and planning. The created sub-issues will then be used by LLMs in subsequent workflow steps for implementation planning and execution, with each sub-issue following the complete workflow independently.
