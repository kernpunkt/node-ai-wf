# BDD/TDD Development Workflow Specification

## Overview
A comprehensive software development workflow optimized for LLM execution, combining Behavior-Driven Development (BDD) and Test-Driven Development (TDD) practices with memory-based knowledge management.

## Core Principles
- **One user story at a time**: Focus on completing one user story before moving to the next
- **BDD-first approach**: Start with user stories, translate to BDD scenarios, then implement
- **Memory-driven**: Use MCP memory tools for architectural decisions, documentation, and context
- **Quality gates**: Built-in review and validation steps ensure code quality
- **LLM-optimized**: Each step designed for effective LLM execution
- **Human-managed dependencies**: Humans handle story selection and business priorities
- **LLM-managed dependencies**: LLMs handle technical dependencies through memory search

## Workflow Steps

### wf0-define-goal
**Purpose**: Establish project foundation with user personas, MVP scope, and full vision
**Input**: Project requirements and vision
**Process**: 
- Analyze project requirements
- Define user personas
- Establish MVP scope
- Create full project vision
**Output**: DEF memory with project goal
**Status**: ✅ Existing

### wf1-create-agent-mode
**Purpose**: Create AI agent personality and technical expertise profile
**Input**: Project context and technical requirements
**Process**:
- Define agent personality traits
- Establish technical expertise areas
- Configure agent behavior patterns
**Output**: Agent mode file in `.cursor/modes/`
**Status**: ✅ Existing

### wf2-create-user-stories
**Purpose**: Generate user stories from project goals and create them in project management system
**Input**: 
- Project goal memory (DEF)
- Output format choice (Jira or GitHub - specified by user)
- Project context (project/board/repository details)
**Process**:
- Analyze project goal memory to extract user stories
- Generate user stories based on project goal and user personas
- Define acceptance criteria for each story
- Create stories/issues using appropriate MCP tools (Jira or GitHub)
**Output**: 
- Created stories/issues in project management system

### wf3-translate-to-bdd
**Purpose**: Convert a single user story into detailed BDD scenarios
**Input**: 
- Story/Issue ID
- Project management system used (Jira or GitHub)
**Process**:
- Retrieve the specific story/issue using MCP tools
- Analyze story requirements and acceptance criteria
- **Quality Gate**: Validate story is complete and ready for BDD translation
- Write Gherkin feature files prefixed with story ID
- Define Given-When-Then scenarios
- Validate scenarios against story requirements
**Output**: Feature files with Gherkin scenarios (prefixed with story ID)

### wf4a-plan-architecture
**Purpose**: Design system architecture and create architectural decisions
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Analyze BDD scenarios to understand requirements
- **Quality Gate**: Validate BDD scenarios are complete and testable
- Review existing ADR memories with status/active for architectural constraints
- Design system interfaces and contracts
- Define data models and relationships
- Plan integration points between components
- Create new ADR memories for global architectural decisions with story ID tag and status/active
- If new decisions supersede existing ADRs, edit old ADR to mark as superseded and remove active tag
- **Create ARC memories with detailed architectural design:**
  - **System interfaces and contracts:**
    - API contracts with Mermaid sequence diagrams for request/response flows
    - Service interfaces with Mermaid class diagrams showing interface definitions
    - Component communication with Mermaid sequence diagrams for interaction flows
  - **Data models and relationships:**
    - Database entities with Mermaid ER diagrams
    - TypeScript types/interfaces with Mermaid class diagrams
    - API schemas with Mermaid class diagrams showing JSON schema structure
    - Domain models with Mermaid class diagrams showing relationships
  - **Integration points between components:**
    - Component integration with Mermaid sequence diagrams for interaction flows
    - Data flow with Mermaid flowchart diagrams for data movement
    - Event flows with Mermaid sequence diagrams for event-driven interactions
    - API integration with Mermaid sequence diagrams for external API calls
- Tag all ARC memories with story ID, component type, and status/active
**Output**: 
- ADR memories with architectural decisions
- ARC memories with detailed architectural design (interfaces, data models, integration points)

### wf4b-plan-implementation
**Purpose**: Create detailed implementation plan with testing strategy
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Analyze BDD scenarios and architecture to understand requirements
- **Quality Gate**: Validate architecture is complete and implementable
- Plan unit test strategy for each component
- Define implementation order and dependencies
- Plan integration testing approach
- Create detailed implementation checklist
- Create IMP memories with implementation plans, tagged with story ID and status/active
**Output**: IMP memories with implementation plans and strategies

### wf5-write-bdd-steps
**Purpose**: Implement BDD step definitions
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- **Quality Gate**: Validate implementation plan is complete and feasible
- Search existing step definition files for reusable steps
- Analyze BDD scenarios to understand step requirements
- Understand architectural constraints and integration points
- Write new step definitions in TypeScript (reusable across components)
- Implement Given-When-Then steps based on architecture and implementation plans
- Add data tables and scenario outlines support
- Validate step definitions against scenarios
- Ensure step definitions are reusable and not story-specific
**Output**: Reusable BDD step definition files

### wf6-write-unit-tests
**Purpose**: Create comprehensive unit test suite
**Input**: Story/Issue ID
**Process**:
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- Analyze implementation plan to understand test requirements
- Identify components that need testing for this story
- Write unit tests for each component (organized by component, not story)
- Implement test doubles and mocks where appropriate
- Add edge case and error condition tests
- Ensure test coverage meets standards
- Ensure unit tests are component-focused and not story-specific
**Output**: Unit test files (organized by component)

### wf7-write-implementation
**Purpose**: Implement one BDD scenarios one at a time
**Input**: Story/Issue ID
**Process**:
- **Quality Gate**: Validate unit tests are comprehensive and complete
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- Analyze BDD scenarios and implementation plan to understand requirements
- Identify components that need implementation for this story
- Implement code to make one BDD scenario pass
- Ensure all related unit tests pass
- Follow clean code standards
- Add error handling and validation
- Ensure implementation files are organized by component/feature, not story
**Output**: Implementation files (organized by component/feature)

### wf7a-validate-implementation
**Purpose**: Validate implementation meets BDD scenario requirements
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search IMP memories: story_id/STORY-123, status/active
- Run Prettier formatting: `pnpm format`
- Run ESLint auto-fix: `pnpm lint:fix`
- **If ESLint issues remain**: Fix remaining linting issues manually
- Run BDD tests for implemented scenario
- **If BDD tests fail**: Analyze failure, fix implementation issues, and retry
- Verify unit tests pass
- **If Unit tests fasil**: Analyze failure, fix issues, and retry
- Verify unit test coverage
- Check code quality and standards
- Validate against acceptance criteria
- **Repeat validation cycle until all checks pass**
**Output**: Validated implementation with formatted and linted code

### wf8-review-implementation
**Purpose**: Comprehensive code review and quality assessment
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- **Identify implementation files** based on ARC memories (component-specific architecture)
- **Identify test files** based on IMP memories (testing strategy)
- Review code quality and standards
- Check test coverage and quality
- Validate against architecture decisions
- Identify potential improvements
- Security review (basic)
- Create DOC memories with review findings and patterns, tagged with story ID, status/active, topic/review
**Output**: DOC memories with review findings and patterns

### wf8a-refactor
**Purpose**: Improve code quality based on review findings
**Input**: Story/Issue ID
**Process**:
- Search DOC memories: story_id/STORY-123, status/active, topic/review
- Apply refactoring improvements based on review findings
- Ensure all tests still pass after refactoring
- **Update DOC memories**: Change status from active to resolved for review findings that were addressed
**Output**: Refactored implementation files (organized by component/feature)

### wf9-security-review
**Purpose**: Comprehensive security assessment
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- **Identify implementation files** based on ARC memories (component-specific architecture)
- Security vulnerability assessment
- Input validation review
- Authentication and authorization check
- Data protection validation
- Security best practices audit
- Create SEC memories with security findings and patterns, tagged with story ID
**Output**: SEC memories with security findings and patterns

### wf9a-refactor-security
**Purpose**: Address security issues identified in security review
**Input**: Story/Issue ID
**Process**:
- Search SEC memories: story_id/STORY-123, status/active, topic/security
- Apply security fixes based on security findings
- Ensure all tests still pass after security refactoring
- **Update SEC memories**: Change status from active to resolved for security issues that were addressed
**Output**: Security-hardened implementation files (organized by component/feature)

### wf10-write-documentation
**Purpose**: Create comprehensive documentation for humans and LLMs
**Input**: Story/Issue ID
**Process**:
- Find feature files with story ID prefix
- Search ARC memories: story_id/STORY-123, status/active
- Search IMP memories: story_id/STORY-123, status/active
- **Identify implementation files** based on ARC memories (component-specific architecture)
- **Identify test files** based on IMP memories (testing strategy)
- Create DOC memories with component-specific API documentation, tagged with story ID, status/active, topic/api
- Create DOC memories with usage examples, tagged with story ID, status/active, topic/examples
- Create DOC memories with architectural decisions and diagrams, tagged with story ID, status/active, topic/architecture
- Create DOC memories with troubleshooting guides, tagged with story ID, status/active, topic/troubleshooting
- Create DOC memories with documentation patterns and standards, tagged with story ID, status/active, topic/patterns
**Output**: DOC memories with comprehensive documentation

### wf11-create-pull-request
**Purpose**: Package implementation for review and integration
**Input**: Story/Issue ID
**Process**:
- Create feature branch
- Write detailed PR description
- Include testing instructions
- Add documentation links
**Output**: Pull request with comprehensive description

## MCP Server Requirements

### Required MCP Servers
- **Memory Tools**: For knowledge management and context preservation
- **Jira MCP**: For creating and managing Jira stories **OR** **GitHub MCP**: For creating and managing GitHub issues
- **Context7 MCP**: For package documentation and API references

### MCP Server Usage
- **wf2**: Uses Jira or GitHub MCP based on user choice
- **wf3**: Uses Jira or GitHub MCP to retrieve specific story/issue
- **wf4-wf12**: Uses Memory Tools for context and knowledge management
- **wf4a**: Uses Context7 MCP for package documentation research
- **All steps**: Use Memory Tools for storing and retrieving context

## Memory Categories and Structure

### Memory Categories (MCP Memory Tools)
- **DEF**: Project definitions, goals, user personas, and MVP scope
- **ADR**: Architecture Decision Records with governance and rationale
- **ARC**: Story-specific architectural decisions and component design
- **IMP**: Implementation plans, testing strategies, and development approaches
- **DOC**: Code documentation, business logic, edge cases, and API guides
- **SEC**: Security assessments, vulnerability analysis, and best practices

### Memory Tagging Strategy
- **Story ID Tags**: All memories tagged with relevant story IDs for easy discovery
- **Search by Story ID**: LLMs can search memories by story ID tags
- **Cross-Story Context**: Memories can be tagged with multiple story IDs
- **Efficient Retrieval**: Story-specific architectural decisions easily found

### ADR Management Strategy
- **ADR Search**: Search existing ADR memories for architectural constraints
- **ADR Compliance**: Ensure new decisions adhere to existing ADRs
- **ADR Supersession**: When new decisions supersede existing ADRs:
  - Create new ADR with supersession rationale
  - Mark old ADR as superseded
  - Link old ADR to new ADR using link_mem tool
  - Maintain ADR history and decision trail
- **ADR Versioning**: Track ADR evolution and decision changes
- **ADR Governance**: Maintain architectural decision integrity

### ADR Structure and Governance
- **ADR Format**: Standard ADR format with status, context, decision, and consequences
- **ADR Status**: Active, Superseded, Deprecated
- **ADR Links**: Forward and backward links between related ADRs
- **ADR History**: Complete decision trail and evolution
- **ADR Search**: Search by status, tags, story ID, and content
- **ADR Compliance**: Validate new decisions against existing ADRs
- **ADR Updates**: Proper versioning and supersession management

### Memory Linking Strategy
- **Bidirectional Links**: Use link_mem tool to create bidirectional links between related memories
- **Link Management**: Use unlink_mem tool to remove links when memories are no longer related
- **Automatic Link Creation**: Links are automatically created in both directions
- **Link Validation**: Never manually edit the "## Related" section in memory content
- **External Links**: Only manually create HTML links to external sources

## Dependency Management Strategy

### Human-Managed Dependencies
- **Story Dependencies**: Humans decide which user story to work on next
- **Business Logic Dependencies**: Humans understand business context and priorities
- **Resource Dependencies**: Humans manage team capacity and external dependencies
- **Strategic Decisions**: Humans make high-level architectural and business decisions

### LLM-Managed Dependencies
- **Code Dependencies**: LLM searches memories to understand technical dependencies
- **Implementation Dependencies**: LLM identifies what code needs to be implemented first
- **Technical Dependencies**: LLM understands component relationships and interfaces
- **Memory Search**: LLM uses memory search to understand existing code and patterns

### Dependency Resolution Process
1. **Human selects story**: Choose which user story to implement next
2. **LLM analyzes dependencies**: Search memories for technical dependencies
3. **LLM creates implementation plan**: Based on technical dependencies found
4. **Human reviews plan**: Approve or modify the technical approach
5. **LLM executes implementation**: Follow the approved plan

### File Organization
- Each workflow step as separate `.md` file
- Clear naming convention: `wf{number}-{description}.md`
- Consistent structure across all steps
- Clear input/output specifications

