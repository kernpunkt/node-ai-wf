# Workflow Command Templates

## Common Patterns for LLM-Driven Workflow Commands

This document contains reusable templates for common patterns found across workflow commands, designed to reduce redundancy and improve consistency.

### 1. Memory Search Template

```markdown
### X. Search Memories
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to [specific context] or similar functionality
  - Search for CTX memories that provide context about [specific context] or architectural patterns
  - Search for DOC memories that document [specific context] or strategies
  - Link to related memories when they provide valuable context for the current task
```

### 2. Package Documentation Lookup Template

```markdown
### Xa. Package Documentation Lookup (Context7 MCP)
When [specific task] that involve pnpm packages or external libraries and you need additional information:
- Use context7 MCP tools to look up [specific context] documentation when you're unsure about [specific context] for specific packages
- Search for [specific context] examples and patterns when you need clarification on how to [specific context] package integrations
- Look up [specific context] strategies and utilities when you need guidance on [specific context] external dependencies
- Find best practices for [specific context] when you're not familiar with the [specific context] patterns for specific libraries
- Reference package-specific [specific context] configuration or setup requirements when needed
```

### 3. TDD Validation Template

```markdown
### X.1 TDD Validation (CRITICAL)
Before proceeding to implementation:
- **CRITICAL**: Run `pnpm test` and verify tests are FAILING (red phase)
- **CRITICAL**: If tests pass immediately, you've over-mocked and broken TDD principles
- Document that tests are failing as expected (red phase of TDD)
- Verify that only external dependencies are mocked, NOT the functionality being developed
```

### 4. Memory Creation Template

```markdown
### X. Capture Insights and Create Memories
During the [specific process], capture any valuable insights that emerge:
- **[Specific context] patterns**: [Description] approaches or anti-patterns discovered
- **Architectural insights**: How [specific context] reveals architectural strengths or weaknesses
- **Design considerations**: How [specific context] influences design decisions
- **[Specific context] insights**: How [specific context] reveals [specific patterns]
- **Maintainability insights**: Code structure observations based on [specific context]
- **[Specific context] patterns**: Best practices for [specific context]

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions discovered during [specific context]
- **CTX memories**: For context about why certain [specific context] approaches were chosen or what they reveal

Add these insights to the GitHub issue comment for future reference.
```

### 5. GitHub Issue Update Template

```markdown
### X. Update GitHub Issue
After [specific task] is completed:
- **Important**: Create a comment on the GitHub issue using `add_issue_comment`
- Add a "[Specific Task] Results" comment with the following content:
- Document what [specific task] were implemented and their coverage
- Note any deviations from the original [specific strategy] and why
- Document any additional [specific task] or improvements made
- Update any existing checklists to mark completed items as done
- Update the issue status if appropriate
```

### 6. Git Commit Template

```markdown
### X. Commit Changes
After completing the [specific task]:
- Stage all [specific task]-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "[type]: [description] for [feature/component name]"`
- **Note**: Do not push the branch yet - that will be done in step 9
```

### 7. Expected Outcome Template

```markdown
## Expected Outcome

### New Features/Bugs:
- [Specific task] files created with [expected state]
- [Specific task] cover all planned [specific scenarios] from the [specific strategy]
- Any [specific context] insights captured as ADR or CTX memories
- GitHub issue updated with [specific task] results
- Changes committed to git with conventional commit format
- Ready to proceed to [next step] ([red → green cycle if applicable])

### Refactoring:
- All existing [specific functionality] has [expected state]
- [Specific task] coverage is comprehensive for current behavior
- Any [specific context] insights captured as ADR or CTX memories
- GitHub issue updated with [specific task] results
- Changes committed to git with conventional commit format
- Ready to proceed with [next step] while maintaining [specific task] safety
```

## Usage Guidelines

1. **Replace placeholders**: Replace `[specific context]`, `[specific task]`, etc. with actual content
2. **Maintain consistency**: Use the same terminology across all commands
3. **Keep it concise**: These templates are designed to be concise and LLM-friendly
4. **Reference when possible**: Use these templates to reduce redundancy in individual commands

## Template Variables

- `[specific context]`: The specific domain or area (e.g., "testing", "integration testing", "refactoring")
- `[specific task]`: The specific task being performed (e.g., "tests", "integration tests", "refactoring")
- `[specific strategy]`: The strategy being followed (e.g., "test strategy", "integration test strategy")
- `[specific scenarios]`: The scenarios being covered (e.g., "test scenarios", "integration scenarios")
- `[specific functionality]`: The functionality being tested/refactored
- `[expected state]`: The expected state of the work (e.g., "failing tests", "passing tests")
- `[next step]`: The next step in the workflow
