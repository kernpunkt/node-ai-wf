# Workflow Step: Create User Stories

## Purpose
Generate user stories from project goals and create them in project management system.

## Input Required
- Project goal memory (DEF) from wf0-define-goal
- Output format choice (Jira or GitHub - specified by user)
- Project context (project/board/repository details)

## Process
1. **Retrieve Project Foundation**
   - Search for DEF memories with project goals and user personas
   - Analyze MVP scope and full project vision
   - Review user personas and their needs

2. **Generate User Stories**
   - Extract user stories based on project goal and user personas
   - Define clear acceptance criteria for each story
   - Ensure stories follow INVEST principles (Independent, Negotiable, Valuable, Estimable, Small, Testable)
   - Prioritize stories based on MVP scope

3. **Create Stories in Project Management System**
   - Use appropriate MCP tools (Jira MCP or GitHub MCP) based on user choice
   - Create stories/issues with detailed descriptions
   - Add acceptance criteria and user story format
   - Set appropriate labels and priorities
   - Link stories to project/epic if applicable

4. **Validate Story Quality**
   - Ensure each story has clear acceptance criteria
   - Verify stories are independent and testable
   - Check that stories align with project goals
   - Validate story descriptions are clear and actionable

## Issue Body Template

Use this template when creating user stories in the project management system:

```markdown
## User Story

**As a** [user persona/role]  
**I want** [goal/feature]  
**So that** [benefit/value]

## Acceptance Criteria

- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

## Technical Notes

[Optional: Add any technical considerations, architecture decisions, or implementation notes]

## Dependencies

[Optional: List any dependent stories, external dependencies, or blockers]
```

## Output
- Created stories/issues in project management system
- Story IDs for tracking and reference
- Acceptance criteria documented
- Project organization established

## Success Criteria
- User stories created in chosen project management system
- Each story has clear acceptance criteria
- Stories are properly organized and prioritized
- Story IDs available for subsequent workflow steps
- Project foundation established for development

## MCP Tools Required
- Memory Tools: For retrieving project goals and context
- Jira MCP OR GitHub MCP: For creating stories/issues (based on user choice)
