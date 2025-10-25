# Workflow Step 1b: Edit GitHub Issue

## Objective
Read an existing GitHub issue, analyze it in context of memories and codebase, engage in a collaborative dialog with the user to understand their change requirements, and edit the issue description upon user approval.

## Instructions

### 1. GitHub Issue Analysis and Memory Search
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Extract all current requirements, constraints, and acceptance criteria
- Identify any linked documentation or related issues
- Note any specific technical requirements or dependencies
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to the current issue or similar functionality
  - Search for CTX memories that provide context about the issue's requirements or constraints
  - Search for DOC memories that document similar features or technical approaches
  - Link to related memories when they provide valuable context for understanding the current issue

### 2. Codebase Context Analysis
- Analyze any relevant existing documentation in the project
- Review relevant existing code that relates to the issue
- Identify dependencies and integration points mentioned in the issue
- Consider any architectural constraints or patterns that affect the issue
- Review any relevant memories found in step 1 to understand existing architectural decisions and context

### 3. Issue Understanding and Presentation
- Summarize the current issue content for the user
- Highlight key aspects: problem/goal, scope, acceptance criteria, and any technical considerations
- Present any relevant context found from memories or codebase analysis
- Ask the user what specific changes they want to make to the issue

### 4. Change Requirements Discussion
Engage in a structured dialog to understand the user's change requirements:

#### Understanding Current State
- Confirm the user's understanding of the current issue
- Ask what aspects of the current issue are not meeting their needs
- Identify what specific changes are desired

#### Clarifying Change Intentions
- What specific parts of the issue need to be modified?
- Are you changing the scope, requirements, acceptance criteria, or technical approach?
- What is driving the need for these changes?
- Are there new constraints or dependencies that have emerged?

#### Change Scope Discussion
- What should be added to the issue?
- What should be removed or modified?
- Are there any new acceptance criteria or success metrics?
- Should the issue title be updated to reflect the changes?

### 5. Change Proposal and Validation
Based on the discussion, propose the updated issue:

#### Proposed Changes Summary
- Clearly explain what changes you're proposing
- Highlight the differences from the current issue
- Explain the rationale for each change based on the user's requirements
- Show how the changes address the user's concerns

#### Updated Issue Content
- Present the complete updated issue description
- Ensure the updated content maintains the same quality standards as the original
- Focus on "what" without "how" (following the same principles as issue creation)
- Include all necessary sections: problem/goal, context, expected outcome, scope, acceptance criteria

### 6. User Approval Process
- Present the proposed changes clearly and comprehensively
- Ask for user confirmation that the changes accurately capture their requirements
- Allow for additional clarifications or modifications if needed
- Ensure the user is satisfied with the proposed updated issue before proceeding

### 7. Issue Update Execution
Once approved by the user:
- Update the GitHub issue with the new description
- Preserve any existing metadata (labels, assignees, etc.) unless specifically requested to change
- Maintain the issue's current status and priority unless changes are requested
- Ensure the update maintains the issue's relationship to any linked issues or pull requests

### 8. Validation and Confirmation
After updating the issue:
- Confirm with the user that the issue has been updated as requested
- Verify that all changes have been applied correctly
- Ensure the updated issue maintains clarity and completeness
- Note that the updated issue is ready for the next workflow step (Preparation) if needed

## Expected Outcome
- Clear understanding of the user's change requirements for the existing issue
- Comprehensive analysis of the issue in context of memories and codebase
- Updated GitHub issue that accurately reflects the user's desired changes
- User approval and satisfaction with the updated issue content
- Issue ready for further workflow steps if needed

## Target Audience
This step is designed for human interaction to ensure accurate understanding of change requirements and user approval of the updated issue. The updated issue can then be used by LLMs in subsequent workflow steps for implementation planning and execution.

## Key Differences from wf1-create-issue
- **Input**: Works with an existing issue rather than creating from scratch
- **Focus**: Emphasizes understanding what needs to change rather than defining new requirements
- **Context**: Leverages existing issue content plus memories and codebase analysis
- **Output**: Updates existing issue rather than creating new ones
- **Validation**: Ensures changes preserve issue quality while meeting user needs
