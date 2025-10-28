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
   - **CREATE FOUNDATIONAL STORY FIRST**: Start with a foundational infrastructure story that sets up the basic infrastructure (project structure, development environment, CI/CD, core dependencies, etc.) that all other stories build upon
   - Extract user stories based on project goal and user personas
   - **Define story boundaries** - explicitly state what IS included and what IS NOT included (to prevent LLMs from implementing related features from other stories)
   - Define clear acceptance criteria for each story
   - Ensure stories follow INVEST principles (Independent, Negotiable, Valuable, Estimable, Small, Testable)
   - Prioritize stories based on MVP scope
   - **Estimate story points** for each story using a standard sizing scale (Fibonacci: 1, 2, 3, 5, 8, 13)
   - **Identify dependencies** - determine which stories must be completed before others can begin (this is mandatory when dependencies exist)
   - **Cross-reference other stories** - when defining boundaries, explicitly reference other stories that handle related features to prevent overlap

3. **Create Stories in Project Management System**
   - Use appropriate MCP tools (Jira MCP or GitHub MCP) based on user choice
   - **Issue Title**: Use a SHORT, concise, descriptive title (e.g., "User Authentication" NOT "As a user I want to log in so that I can access the system")
   - Create stories/issues with detailed descriptions in the body
   - Add acceptance criteria and user story format in the body
   - Assign story point estimates to each story
   - Set appropriate labels and priorities
   - Link stories to project/epic if applicable
   - **Link dependent stories** - create explicit dependencies between stories where necessary

4. **Validate Story Quality**
   - Ensure each story has clear acceptance criteria
   - Verify stories are independent and testable
   - Check that stories align with project goals
   - Validate story descriptions are clear and actionable
   - Verify foundational infrastructure story is included
   - Confirm issue titles are short and descriptive (not full story format)
   - Ensure all stories have story point estimates
   - Validate that dependencies are properly identified and linked
   - **Validate story boundaries are explicit** - ensure each story clearly defines what is in scope and what is out of scope
   - **Check for boundary overlap** - verify that similar features aren't in multiple stories' "In Scope" sections

## Issue Body Template

Use this template when creating user stories in the project management system:

```markdown
## User Story

**As a** [user persona/role]  
**I want** [goal/feature]  
**So that** [benefit/value]

## Story Points

[Estimate: X story points using Fibonacci scale (1, 2, 3, 5, 8, 13)]

## Story Boundaries

**IMPORTANT: This section explicitly defines what IS and IS NOT included in this story to prevent scope creep.**

**✅ In Scope - What this story DOES include:**
- [Specific features/functionality that should be implemented]
- [Specific components or areas that should be covered]

**❌ Out of Scope - What this story DOES NOT include (belongs to other stories):**
- [Features or functionality explicitly excluded]
- [Components or areas that should NOT be implemented in this story]
- [Related functionality that belongs to other stories (reference those stories)]

**⚠️ Implementation Focus:**
- Only implement features listed in "In Scope"
- Do NOT implement features listed in "Out of Scope"
- If uncertain whether something should be included, check this section first

## Acceptance Criteria

- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

## Technical Notes

[Optional: Add any technical considerations, architecture decisions, or implementation notes]

## Dependencies

**Note**: If this story requires other stories to be completed first, list them here with links/references. Leave blank only if the story is truly independent.

- Depends on: [Story ID/Title]
- Blocked by: [Story ID/Title]
- External dependencies: [Any external factors]
```

## Output
- Created stories/issues in project management system
- Story IDs for tracking and reference
- Acceptance criteria documented
- Story point estimates assigned to each story
- Dependencies identified and linked
- Project organization established

## Success Criteria
- User stories created in chosen project management system
- Foundational infrastructure story included as first priority
- Issue titles are short and descriptive (not full story format)
- Each story has clear acceptance criteria
- All stories have story point estimates
- Dependencies are properly identified and linked (when applicable)
- **Story boundaries explicitly defined** - each story has clear in-scope and out-of-scope definitions
- **No boundary overlap** - no features appear in multiple stories' "In Scope" sections
- Stories are properly organized and prioritized
- Story IDs available for subsequent workflow steps
- Project foundation established for development

## MCP Tools Required
- Memory Tools: For retrieving project goals and context
- Jira MCP OR GitHub MCP: For creating stories/issues (based on user choice)
