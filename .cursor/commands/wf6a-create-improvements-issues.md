# Workflow Step 6a: Create Improvement Issues

## Objective
Analyze the code review recommendations for future improvements and create new GitHub issues for any improvements that are not already covered by existing open issues, ensuring all identified improvement opportunities are tracked and actionable.

## Instructions

### 1. Read GitHub Issue and Search Relevant Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the "Code Review Results" section from the comments to identify future improvement recommendations
- Understand what improvements were identified and their context
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to improvement tracking or similar functionality
  - Search for CTX memories that provide context about improvement prioritization or architectural patterns
  - Search for DOC memories that document improvement tracking patterns or best practices
  - Link to related memories when they provide valuable context for the current improvement tracking task

### 2. Extract Improvement Recommendations
From the code review results, identify all future improvement recommendations:
- **Code Quality Improvements**: Naming, function structure, code organization, comments, error handling, DRY violations
- **Project Rules Compliance**: Alignment with conventions, consistency with patterns, guideline violations
- **Architectural Improvements**: Dependency direction, separation of concerns, architectural principles, anti-patterns
- **ADR Compliance**: Alignment with Architecture Decision Records, architectural decision violations
- **Performance Improvements**: Any performance-related recommendations
- **Maintainability Improvements**: Code structure, organization, and maintainability enhancements

### 3. Search for Existing Open Issues
Use GitHub MCP tools to search for existing open issues that might cover the identified improvements:
- Search by keywords related to each improvement category
- Look for issues with similar titles or descriptions
- Check for issues tagged with relevant labels (refactor, improvement, enhancement, etc.)
- Consider issues that might be related even if not exactly matching

### 4. Compare and Identify Gaps
For each improvement recommendation:
- Check if there's already an open issue covering this improvement
- Determine if existing issues are comprehensive enough to address the recommendation
- Identify improvements that are not covered by any existing issues
- Categorize improvements by priority and scope

### 5. Create New Improvement Issues
For improvements not covered by existing issues, create new GitHub issues:

#### Issue Title Guidelines
- Use clear, descriptive titles that indicate the improvement goal
- Follow the pattern: "Improve: Specific Improvement Area"
- Examples:
  - "Improve: refactor user authentication error handling"
  - "Improve: enhance code organization in data processing module"
  - "Improve: align with ADR-001 architectural patterns"

#### Issue Description Structure
Include the following information:
- **Improvement Goal**: What specific improvement needs to be made
- **Context**: Why this improvement is needed (reference to code review findings)
- **Current State**: Brief description of the current implementation
- **Expected Outcome**: What the improved state should look like
- **Scope**: What is and isn't included in this improvement
- **Acceptance Criteria**: How we'll know the improvement is complete
- **Priority**: High, Medium, or Low based on impact and effort
- **Related Code**: Reference to specific files or components that need improvement

#### Issue Labels and Metadata
- Use appropriate labels (improvement, refactor, enhancement, etc.)
- Set priority based on the improvement's impact and effort
- Link to the original issue that identified this improvement
- Add any relevant tags for categorization

### 6. Issue Creation Process
For each new improvement issue:
- Create the issue with the agreed-upon content
- Use appropriate labels and priority settings
- Link the new issue to the original issue that identified the improvement
- Ensure the issue description is clear and actionable

### 7. Validation and Documentation
After creating improvement issues:
- Verify that all significant improvement recommendations are now covered by issues
- Document which improvements were already covered by existing issues
- Note any improvements that were combined or split into multiple issues
- Ensure the improvement tracking is comprehensive and actionable

### 8. Update Original Issue
Update the original GitHub issue to document the improvement tracking:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add an "Improvement Issues Created" comment with the following content:
- List the new improvement issues created with their numbers and titles
- Note any improvements that were already covered by existing issues
- Include a summary of the improvement tracking status
- Update any existing checklists to mark completed items as done

### 9. Capture Improvement Tracking Insights and Create Memories
During the improvement issue creation process, capture any valuable insights that emerge:
- **Improvement prioritization patterns**: How to effectively prioritize different types of improvements
- **Issue organization insights**: How to structure improvement issues for maximum clarity
- **Tracking effectiveness**: What makes improvement tracking most effective
- **Code quality evolution**: How improvement tracking supports long-term code quality

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions about improvement tracking approaches
- **CTX memories**: For context about why certain improvements were prioritized or how they should be tracked

Add these insights to the GitHub issue comment for future reference.

### 10. Commit Changes
After completing the improvement issue creation:
- Stage all changes (issue updates): `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "docs: create improvement issues from code review recommendations"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- All code review improvement recommendations are tracked in GitHub issues
- New improvement issues created for recommendations not already covered
- Existing issues identified and linked to avoid duplication
- Improvement tracking is comprehensive and actionable
- Original issue updated with improvement tracking status
- Any improvement tracking insights captured as ADR or CTX memories
- Changes committed to git with conventional commit format
- Clear roadmap for future code quality improvements

## Target Audience
This step is designed for LLM execution to systematically track and organize improvement opportunities identified during code review, ensuring no valuable improvement recommendations are lost and all are properly prioritized and actionable.
