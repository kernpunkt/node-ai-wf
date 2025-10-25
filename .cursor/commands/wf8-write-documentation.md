# Workflow Step 8: Write Documentation

## Objective
Create comprehensive documentation of the implementation journey, including insights gathered throughout all workflow steps, using memory-tools to create memories of appropriate types (ADR, DOC, CTX) for future reference and knowledge sharing.

## Instructions

### 1. Read GitHub Issue and Search Relevant Memories
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the complete implementation journey including:
  - Original requirements and plan
  - Implementation approach and decisions
  - Code review findings and refactoring results
  - Final implementation status
  - Any insights captured in earlier workflow steps
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to documentation approaches or similar functionality
  - Search for CTX memories that provide context about documentation decisions or architectural patterns
  - Search for DOC memories that document documentation patterns or best practices
  - Link to related memories when they provide valuable context for the current documentation task

### 2. Review Previously Captured Insights
- Check the GitHub issue for any insights that were captured during earlier workflow steps
- Review any ADR, CTX, or DOC memories that were created in wf2-wf7a
- Identify any additional insights that should be documented or expanded upon
- Note any patterns or decisions that may have emerged across multiple steps
- Review any relevant memories found in step 1 to understand existing documentation patterns and context

### 3. Analyze Implementation Insights
Identify key insights and accomplishments to document:
- **Architectural decisions** made during implementation
- **Design patterns** used or established
- **Technical solutions** to challenging problems
- **Lessons learned** from the implementation process
- **Best practices** discovered or reinforced
- **Integration patterns** with existing systems
- **Insights from earlier workflow steps** that should be preserved

### 4. Create Memory Documentation
Call get_usage_info to understand our documentation standards.
Use memory-tools to create appropriate memory types:

#### ADR (Architecture Decision Record) Memories
- Document significant architectural decisions made
- Include the context, decision, consequences, and rationale
- Use when architectural choices were made that affect the project structure
- Examples: data structure choices, interface designs, dependency decisions

#### DOC (Documentation) Memories
- Document implementation details and technical specifications
- Include code patterns, conventions, or approaches established
- Use for technical documentation that developers need to reference
- Examples: API usage patterns, component interfaces, testing strategies

#### CTX (Context) Memories
- Document the broader context and reasoning behind decisions
- Include business context, constraints, and trade-offs considered
- Use when decisions were influenced by external factors or business needs
- Examples: performance requirements, user experience considerations, integration constraints

### 5. Memory Content Guidelines
For each memory created:
- Use clear, descriptive titles that indicate the content
- Include relevant tags for categorization and searchability
- Reference the GitHub issue number and related context
- Link to relevant code files or documentation when appropriate
- Include any diagrams, code examples, or references that support the memory

### 6. Cross-Reference and Linking
- Link related memories together when they reference similar concepts
- Ensure memories can be discovered by future developers working on similar features
- Use consistent terminology and patterns across related memories
- Consider how these memories will help with future decision-making

### 7. Update GitHub Issue
After documentation is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "Documentation Created" comment with the following content:
- List the memories created with their types and titles
- Note any key insights or patterns that were documented
- Include links to the created memories if possible
- Update any existing checklists to mark completed items as done

### 8. Commit Changes
After completing the documentation:
- Stage all documentation changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "docs: add implementation documentation and memories for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- Comprehensive documentation of implementation insights and accomplishments
- Memories created for future reference and knowledge sharing
- Architectural decisions properly recorded for future developers
- Technical patterns and solutions documented for reuse
- Context and reasoning preserved for future decision-making
- Integration of insights from all workflow steps into cohesive documentation
- GitHub issue updated with documentation summary
- Changes committed to git with conventional commit format
