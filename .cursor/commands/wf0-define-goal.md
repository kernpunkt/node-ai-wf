# Workflow Step 0: Define Project Goal

## Objective
Engage in a collaborative discussion with the user to understand their project vision, gather requirements, and create a comprehensive project goal document that serves as the foundation for all future development work.

## Instructions

### 1. Initial Discussion and Context Gathering
- Ask the user to describe their project vision and what they want to accomplish
- Listen carefully to their description and identify the core problem or opportunity
- Ask clarifying questions to understand the context and scope
- Determine the target audience and users of the system
- Understand the business context and constraints
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to similar projects or architectural decisions
  - Search for CTX memories that provide context about similar requirements or constraints
  - Search for DOC memories that document similar project approaches or technical patterns
  - Link to related memories when they provide valuable context for understanding the current project

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

#### Business Context
- What is the business model or value proposition?
- Are there any regulatory or compliance requirements?
- What is the timeline or urgency for delivery?
- What are the success metrics or KPIs?

### 3. MVP Definition Discussion
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
- When will you know the MVP is ready for expansion?

### 4. Full Product Vision Discussion
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

### 5. Documentation Creation
Once sufficient information has been gathered, create the `projectgoal.md` file in the project root directory with the following structure:

#### File Structure
```markdown
# Project Goal: [Project Name]

## Summary
Brief 2-3 sentence summary of the project goal and motivation.

## Motivation
Detailed explanation of why this project is needed, what problem it solves, and the value it provides.

## MVP (Minimum Viable Product)
### Core Features
- List of essential features for the first release
- Brief description of each feature and its purpose

### Success Criteria
- How MVP success will be measured
- Key metrics and validation approaches

### Timeline
- Expected timeline for MVP delivery
- Key milestones and deliverables

## Full Product Vision
### Extended Functionality
- Comprehensive list of all possible features for the final product
- Organized by functional areas or user workflows
- Brief descriptions of each feature

### Future Considerations
- Potential evolution paths
- Scalability and expansion opportunities
- Long-term vision and goals

## Technical Considerations
- Any specific technical requirements or constraints
- Platform or technology preferences
- Integration requirements
- Performance expectations

## Success Metrics
- How overall project success will be measured
- Key performance indicators
- User satisfaction metrics
- Business impact metrics
```

### 6. Validation and Refinement
After creating the initial document:
- Review the document with the user to ensure accuracy
- Ask for any clarifications or additions
- Refine the content based on user feedback
- Ensure the MVP scope is realistic and achievable
- Verify that the full vision captures all discussed possibilities

### 7. Memory Creation
Capture key insights from the goal definition process:
- **ADR memories**: For any significant architectural or technical decisions made during goal definition
- **CTX memories**: For important context about business requirements, constraints, or user needs
- **DOC memories**: For documenting the goal definition process or patterns used

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

## Expected Outcome
- Clear understanding of the project vision and requirements
- Comprehensive `projectgoal.md` file created in the project root directory
- Well-defined MVP scope with clear success criteria
- Complete vision of the full product with all possible functionality
- Any goal definition insights captured as appropriate memories
- Foundation established for creating GitHub issues in the next workflow step
