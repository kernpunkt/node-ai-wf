# Workflow Step 0: Define Project Goal

## Objective
Engage in a collaborative discussion with the user to understand their project vision, gather requirements, and create a comprehensive project goal document that serves as the foundation for all future development work.

## ⚠️ Critical Context Warning
**IMPORTANT**: When this workflow step is executed, the codebase contains ONLY:
- Technical examples and boilerplate code
- Basic technical setup and configuration
- No business logic or project-specific functionality
- No information about the actual project goals or requirements

**DO NOT** attempt to analyze the existing code to understand the project goals. The current codebase provides NO insights into the business requirements, user needs, or project vision. Only technical considerations (like framework choices, build tools, etc.) can be derived from the existing code.

**The project goals and requirements must come from:**
1. **User discussion and conversation** - Primary source
2. **Documents provided by the user** - Specifications, wireframes, requirements docs, etc.
3. **NOT from analyzing the existing codebase** - The code contains no business logic or project goals

## Instructions

### 1. Initial Discussion and Context Gathering
- Ask the user to describe their project vision and what they want to accomplish
- **Check if the user has any existing documents** (specifications, wireframes, requirements docs, etc.) that can provide context
- Listen carefully to their description and identify the core problem or opportunity
- Ask clarifying questions to understand the context and scope
- Determine the target audience and users of the system
- Understand the business context and constraints

### 2. Requirements Discovery
Engage in a structured discussion to gather comprehensive requirements:

#### Core Functionality
- What is the primary purpose of the system?
- What are the essential features that must be included?
- What problems does this solve for users?
- What are the key user workflows or journeys?

#### User Experience
- Who are the primary users and what are their needs?
- What are the user personas and their different requirements?
- How do users currently solve this problem (if at all)?
- What would make this solution compelling to users?

#### Technical Considerations
- Are there any specific technical requirements or constraints?
- What platforms or technologies should be considered?
- Are there any integration requirements with existing systems?
- What are the performance or scalability expectations?

**Note**: You may reference the existing technical setup (framework, build tools, testing setup) as context for technical decisions, but remember that this setup is generic and doesn't reflect the actual project requirements. The user's specific technical needs may differ from the boilerplate setup.

#### Business Context
- What is the business model or value proposition?
- Are there any regulatory or compliance requirements?
- What are the success metrics or KPIs?

#### User Personas
- Who are the different types of users who will interact with this system?
- What are their roles, responsibilities, and goals?
- What are their technical skill levels and preferences?
- What are their pain points and motivations?
- How do their needs differ from each other?
- What are their typical workflows and use cases?

### 3. Persona Development
Work with the user to create detailed user personas:

#### Persona Discovery Questions
For each persona (primary and secondary users), define:
- **Name and role**: Clear identity and responsibilities
- **Technical expertise**: Skill level and familiarity with domain
- **Goals and motivations**: What they want to achieve
- **Pain points**: Current frustrations and challenges
- **Workflows**: How they typically work and interact with systems
- **Success criteria**: How they measure success

#### Persona Validation
- Are personas realistic and research-based?
- Do they represent the full user spectrum?
- How do their needs align with the proposed solution?

### 4. MVP Definition Discussion
Work with the user to define a Minimum Viable Product:

#### MVP Scope
- What is the smallest set of features that would provide value to users?
- Which features are absolutely essential for the first release?
- What can be deferred to later versions?
- How will you validate that the MVP meets user needs?

#### MVP Success Criteria
- How will you measure the success of the MVP?
- What user feedback mechanisms will be in place?
- What are the key metrics to track?

### 5. Full Product Vision Discussion
Explore the complete vision for the final product:

#### Extended Functionality
- What additional features would make this a comprehensive solution?
- What advanced capabilities could be added over time?
- How might the system evolve to serve different user segments?
- What integrations or partnerships could enhance the product?

#### Future Considerations
- How might the product scale or expand?
- What new markets or use cases could be addressed?
- What technological advances might influence the product direction?
- How might user needs evolve over time?

### 6. Memory Creation
Once sufficient information has been gathered, create a memory using the MCP memory tools with the following specifications:

#### Memory Configuration
- **Title**: "project-goal"
- **Category**: "DEF" (Definition)
- **Tags**: ["project-goal", "requirements", "mvp", "vision", "personas"]
- **Content**: Structured markdown content following the format below

#### Memory Content Structure
```markdown
# Project Goal: [Project Name]

## Summary
Brief 2-3 sentence summary of the project goal and motivation.

## Motivation
Detailed explanation of why this project is needed, what problem it solves, and the value it provides.

## User Personas
### Primary Personas
- **Name**: Brief description, role, goals, pain points, technical level, workflows

### Secondary Personas  
- **Name**: Brief description, role, goals, pain points, technical level, workflows

## MVP (Minimum Viable Product)
### Core Features
- List of essential features with brief descriptions

### Success Criteria
- How MVP success will be measured and key metrics

### Timeline
- Expected timeline and key milestones

## Full Product Vision
### Extended Functionality
- Comprehensive feature list organized by functional areas

### Future Considerations
- Evolution paths, scalability opportunities, long-term vision

## Technical Considerations
- Technical requirements, platform preferences, integration needs, performance expectations

## Success Metrics
- Overall success measurement, KPIs, user satisfaction, business impact
```

#### Memory Creation Process
1. Use `mcp_memory-tools_write_mem` with title "project-goal", category "DEF"
2. Add appropriate tags for categorization
3. Structure content as markdown following the format above
4. Include all gathered information in appropriate sections

**Important**: Memory content should be based on user discussion and documents, NOT on existing codebase analysis.

### 7. Validation and Refinement
After creating the initial memory:
- Review memory content with user for accuracy
- Refine based on user feedback
- Ensure MVP scope is realistic and achievable
- Verify full vision captures all discussed possibilities
- Update memory if needed using `mcp_memory-tools_edit_mem`

## Expected Outcome
- Clear understanding of project vision and requirements
- Comprehensive memory created with title "project-goal" and category "DEF"
- Detailed user personas documented for primary and secondary users
- Well-defined MVP scope with clear success criteria
- Complete vision of full product with all possible functionality
- Memory properly indexed and searchable for future reference
- Foundation established for creating GitHub issues in next workflow step
