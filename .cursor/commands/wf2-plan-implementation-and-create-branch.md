# Workflow Step 2: Plan Implementation and Create Branch

## Objective
Analyze the GitHub issue, understand requirements, create a comprehensive implementation plan, and establish a development branch that enables an LLM to complete the task.

## Instructions

### 1. GitHub Issue Analysis and Boundary Definition
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Extract all requirements, constraints, and acceptance criteria from both the issue description and comments
- Identify any linked documentation or related issues
- Note any specific technical requirements or dependencies

### 1a. Issue Boundary Analysis (CRITICAL)
To prevent scope creep and ensure focused implementation:
- **Search for related open issues** using GitHub MCP tools to find issues with similar keywords, labels, or functionality
- **Analyze issue boundaries** by comparing the current issue with related open issues:
  - What functionality is explicitly included in the current issue?
  - What functionality is covered by other open issues?
  - Are there any overlapping requirements or potential conflicts?
  - What are the clear boundaries between this issue and others?
- **Identify scope exclusions** by noting what should NOT be implemented in this issue:
  - Features that are explicitly mentioned in other open issues
  - Functionality that would logically belong to a different issue
  - Enhancements or improvements that are out of scope
- **Document boundary decisions** in the implementation plan to ensure the LLM stays focused

### 2. Memory Tools Understanding and Search
- Call `get_usage_info` to understand how the memory-tools should be used
- Review any existing memory-tools documentation in the project
- Understand the available memory operations and their purposes
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to the current task or similar functionality
  - Search for CTX memories that provide context about architectural decisions
  - Search for DOC memories that document relevant technical patterns or approaches
  - Link to related memories when they provide valuable context for the current task

### 3. Requirements and Code Analysis
- Analyze any relevant existing documentation in the project
- Review relevant existing code that will be modified or extended
- Identify dependencies and integration points
- Consider any architectural constraints or patterns
- Review any relevant memories found in step 2 to understand existing architectural decisions and context

### 3a. Package Documentation Research (Context7 MCP)
When the implementation involves pnpm packages or external libraries that you need more information about:
- Use context7 MCP tools to look up official documentation for packages you're unsure about
- Search for code examples and usage patterns when you need clarification on implementation approaches
- Look up API references and best practices for packages where you need additional guidance
- Document any important package-specific considerations or constraints found
- Include links to relevant documentation in the implementation plan

### 4. Create Implementation Plan
Create a comment on the GitHub issue with the following sections:

#### Issue Scope and Boundaries
- **In Scope**: Clearly define what this issue will implement
- **Out of Scope**: Explicitly list what this issue will NOT implement
- **Related Issues**: Reference other open issues that cover related functionality
- **Boundary Rationale**: Explain why certain functionality is excluded from this issue
- **Dependencies**: Note any dependencies on other open issues or external factors

#### Useful Information Found
- Document any relevant findings from the analysis
- Note any constraints, dependencies, or important context
- Include links to relevant documentation or code
- Include any package documentation and examples found via context7 MCP

#### Data Structures and Interfaces Plan
- Define the data models needed
- Plan the interfaces and types
- Consider data flow and state management
- Document any API contracts

#### UI Components Plan (if applicable)
- Identify UI components that need to be created/modified
- Plan component hierarchy and relationships
- Consider styling and layout requirements
- Plan any interactive behaviors

#### Step-by-Step Implementation Checklist
- Break down the implementation into logical steps
- Order steps to minimize dependencies
- Include validation checkpoints (but NOT test strategy - that's handled in a later step)
- Consider error handling and edge cases

### 5. Reflection and Self-Assessment
Before finalizing the implementation plan, take a moment to reflect on the preparation work completed:
- **Scope Boundary Validation**: Critical review to prevent scope creep
  - Does the implementation plan stay strictly within the defined issue boundaries?
  - Are there any features or functionality that belong to other open issues?
  - Is the scope clearly defined and focused on the specific issue requirements?
  - Have all scope exclusions been properly documented and justified?
- **Plan Completeness Review**: Re-examine the implementation plan with fresh perspective
  - Are all requirements from the issue adequately addressed in the plan?
  - Is the data structures and interfaces plan comprehensive and well-defined?
  - Are the UI components plan (if applicable) complete and logical?
  - Is the step-by-step implementation checklist detailed enough for execution?
  - **Note**: Test strategy will be created in a later step, not in this step
- **Technical Feasibility Assessment**: Evaluate the technical approach
  - Are the proposed data structures and interfaces appropriate for the requirements?
  - Is the implementation approach technically sound and achievable?
  - Are there any technical constraints or dependencies that weren't considered?
  - **Note**: Testing strategy will be evaluated in a later step, not in this step
- **Integration Considerations**: Review how the implementation fits with existing systems
  - Are integration points with existing code properly identified?
  - Are dependencies on external packages or libraries properly documented?
  - Is the implementation plan consistent with existing architectural patterns?
  - Are there any conflicts with existing code or patterns?
- **Self-Correction**: If reflection reveals issues or improvements needed
  - **CRITICAL**: Remove any functionality that belongs to other open issues
  - **CRITICAL**: Tighten scope boundaries if the plan includes too much
  - Refine data structures and interfaces if they're incomplete or inappropriate
  - Adjust the implementation checklist if steps are missing or unclear
  - **Note**: Test strategy improvements will be handled in a later step, not in this step
  - Update the plan to address any technical feasibility concerns
  - Add missing integration considerations or dependency documentation
  - Ensure scope exclusions are clearly documented and justified

### 6. Create Development Branch
After reflection and any necessary plan adjustments:
- Create a new local GitHub branch based on the current branch
- Follow conventional branch naming guidelines:
  - `feature/issue-{number}-{description}` for new features
  - `bugfix/issue-{number}-{description}` for bug fixes
  - `refactor/issue-{number}-{description}` for refactoring
- Use kebab-case for the description part
- Keep the description concise but descriptive
- do not create a pullrequest yet
- do not publish the branch yet

## Output
After completing this step, the GitHub issue should have:
- **A comment with clear scope boundaries** defining what is and isn't included in this issue
- All requirements and context needed for implementation
- A clear implementation plan with data structures and interfaces
- UI component plans (if applicable)
- A detailed step-by-step implementation checklist
- **Explicit scope exclusions** to prevent implementation of functionality belonging to other issues
- **Note**: Test strategy will be created in a later step, not in this step
- A new development branch created and ready for work

## Target Audience
This plan should be written for an LLM to understand and execute the implementation without needing additional clarification.
