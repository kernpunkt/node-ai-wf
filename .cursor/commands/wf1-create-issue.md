# Workflow Step 1: Create GitHub Issues

## Objective
Understand the user's intentions, clarify requirements, and create appropriate GitHub issues for features, bugs, or refactoring tasks that contain only the "what" without the "how".

## Instructions

### 1. Understand User Intentions and Search Relevant Memories
- Ask the user to describe what they want to accomplish
- Listen carefully to their description and identify the core problem or goal
- Ask clarifying questions to understand the context and scope
- Determine if this is a single task or multiple related tasks
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to similar functionality or architectural decisions
  - Search for CTX memories that provide context about similar requirements or constraints
  - Search for DOC memories that document similar features or technical approaches
  - Link to related memories when they provide valuable context for understanding the current request

### 2. Task Classification Discussion
Engage in a discussion to determine the appropriate issue type:
- **Feature**: New functionality or capability being added
- **Bug**: Something that's broken or not working as expected
- **Refactoring**: Improving existing code without changing functionality

Ask specific questions to clarify:
- Is this adding something new or fixing something existing?
- Is the current behavior incorrect, or do you want to improve it?
- Are you changing how something works or just making it better?

### 3. Requirements Clarification
Continue the discussion until you have a clear understanding:
- What is the specific problem or goal?
- Who are the users/beneficiaries of this change?
- What is the expected outcome or behavior?
- Are there any constraints or dependencies to consider?
- What is the scope and priority of this work?

### 4. Issue Proposal and Approval
Based on the discussion, propose one or more GitHub issues:

#### For Single Tasks:
- Suggest a single issue with a clear, descriptive title
- Provide a brief summary of what the issue will address
- Ask for user approval before creating

#### For Complex Tasks:
- Break down into multiple related issues if appropriate
- Explain the relationship between issues
- Suggest a logical order for implementation
- Ask for user approval on the breakdown and issue descriptions

### 5. Issue Creation Guidelines
When creating issues, focus ONLY on the "what":

#### Issue Title
- Use clear, descriptive titles that indicate the goal
- Follow the pattern: "Action: Specific Goal"
- Examples:
  - "Add user authentication system"
  - "Fix memory leak in data processing"
  - "Refactor component structure for better maintainability"

#### Issue Description
Include only the essential information:
- **Problem/Goal**: What needs to be accomplished
- **Context**: Why this is needed or what it solves
- **Expected Outcome**: What success looks like
- **Scope**: What is and isn't included
- **Acceptance Criteria**: How we'll know it's complete

#### What NOT to Include
- Implementation details or technical solutions
- Code examples or specific approaches
- Step-by-step instructions
- Technical architecture decisions

### 6. Issue Creation Process
Once approved:
- Create the GitHub issue(s) with the agreed-upon content
- Use appropriate labels (feature, bug, enhancement, etc.)
- Set appropriate priority if the system supports it
- Provide the issue number(s) to the user for reference

### 7. Reflection and Self-Assessment
Before finalizing the issues, take a moment to reflect on the work completed:
- **Issue Quality Review**: Re-examine the created issues with fresh perspective
  - Are the titles clear and descriptive enough?
  - Do the descriptions accurately capture the user's intent?
  - Is the scope appropriately defined for each issue?
  - Are the acceptance criteria measurable and complete?
- **Requirements Completeness**: Consider if anything was missed
  - Have all user requirements been addressed?
  - Are there any implicit requirements that should be made explicit?
  - Is the issue breakdown logical and complete?
- **Issue Relationships**: Review the relationship between multiple issues
  - Are dependencies clearly identified?
  - Is the implementation order logical?
  - Do the issues collectively cover the full scope?
- **Self-Correction**: If reflection reveals issues or improvements needed
  - Make necessary adjustments to issue titles or descriptions
  - Add missing requirements or acceptance criteria
  - Refine scope definitions if they're too broad or narrow
  - Update issue relationships or dependencies if needed

### 8. Validation
After reflection and any necessary adjustments:
- Confirm with the user that the issues accurately capture their intentions
- Verify that the scope and requirements are clear
- Ensure the user is satisfied with the issue descriptions
- Note that the "how" will be defined in the next workflow steps

## Expected Outcome
- Clear understanding of user intentions and requirements
- Appropriate GitHub issue(s) created with descriptive titles
- Issue descriptions that focus on "what" without "how"
- User approval and satisfaction with the created issues
- Issues ready for the next workflow step (Preparation)

## Target Audience
This step is designed for human interaction to ensure accurate understanding and issue creation. The created issues will then be used by LLMs in subsequent workflow steps for implementation planning and execution.
