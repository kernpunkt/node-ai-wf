# Workflow Step: Break Down Stories

## Purpose
Decompose large stories (>3 story points) into smaller, manageable subissues.

## Input Required
- Story/Issue ID
- Project management system used (Jira or GitHub)

## Process
1. **Retrieve Story Details**
   - Use MCP tools to retrieve the specific story/issue
   - Analyze story points, acceptance criteria, and complexity
   - Review story context and technical requirements

2. **Quality Gate: Story Size Validation**
   - Check if story points >3 OR if story is complex with multiple acceptance criteria
   - Validate story can be meaningfully decomposed into independent subissues
   - Ensure decomposition will provide value (not just artificial splitting)
   **⚠️ CRITICAL: If story is already well-sized (≤3 points) or cannot be meaningfully decomposed, you MUST stop processing immediately and yield control back to the user. Do not proceed to the next step until all quality gates pass.**

3. **Identify Logical Breakdown Points**
   - Analyze acceptance criteria to identify independent sub-features
   - Identify technical boundaries (frontend/backend, services, APIs)
   - Detect sequential dependencies (login before profile, create before update)
   - Consider user value boundaries (each subissue delivers value independently)

4. **Create Subissues**
   - Create new issues for each logical sub-feature
   - Use format: **[Original Title] - [Sub-feature]**
   - Example: "User Management - Login" (from original "User Management")
   - Estimate story points using Fibonacci scale (1, 2, 3, 5, 8, 13)
   - **Ensure total subissue points ≤ original story points**
   - **Define explicit boundaries for each subissue** - clearly state what is in scope and what is out of scope for each subissue
   - **Cross-reference related subissues** - when defining boundaries, explicitly state what related features belong to other subissues
   - Add acceptance criteria specific to each subissue
   - Link subissues to original story (parent-child relationship)
   - Mark original story as epic/epic link depending on system

5. **Validate Subissues**
   - Ensure each subissue is independently estimable
   - Verify subissues follow INVEST principles
   - Check that total story points make sense
   - Validate dependencies between subissues are clear
   - Confirm acceptance criteria are complete and testable
   - **Validate story boundaries** - ensure each subissue has explicit in-scope and out-of-scope definitions
   - **Check for boundary overlap** - verify no features appear in multiple subissues' "In Scope" sections

## Output
- New subissues created in project management system
- Subissue IDs for tracking and reference
- Dependencies between subissues identified
- Total story point allocation validated

## Success Criteria
- Subissues created and properly linked to original story
- Each subissue is independently estimable and testable
- Total subissue points ≤ original story points
- Dependencies clearly identified and linked
- **Story boundaries explicitly defined** - each subissue has clear in-scope and out-of-scope definitions
- **No boundary overlap** - no features appear in multiple subissues' "In Scope" sections
- Original story marked as epic (if supported)
- All subissues have clear acceptance criteria
- Breakdown provides genuine value and improved manageability

## MCP Tools Required
- Jira MCP OR GitHub MCP: For retrieving and creating stories/issues
