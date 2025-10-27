# Workflow Step 1: Create Agent Mode

## Objective
Create a comprehensive agent prompt for the perfect team member based on the project goal, focusing on personality, traits, and technical expertise rather than duplicating existing project rules or command information.

## Instructions

### 1. Research Current Best Practices
- Use web search to identify latest techniques for creating AI agent prompts
- Research current best practices for defining agent personalities and technical expertise
- Look up effective patterns for team member role definition in AI systems
- Stay informed about latest developments in agent prompt engineering

### 2. Understand Agent Target Users
Engage with the user to understand who will be interacting with the AI agent:
- **Primary users**: Who will be the main users of this AI agent?
- **User roles**: What are their job titles, responsibilities, and expertise levels?
- **Technical background**: What is their technical skill level and familiarity with the domain?
- **Communication preferences**: How do they prefer to communicate and receive information?
- **Work context**: What is their typical work environment and constraints?
- **Expectations**: What do they expect from an AI assistant in this context?
- **Pain points**: What challenges do they face that the agent should help address?
- **Success criteria**: How will they measure the agent's effectiveness?

### 3. Retrieve Project Goal from Memory
- Use `mcp_memory-tools_search_mem` to find the project goal memory with title "project-goal"
- Use `mcp_memory-tools_read_mem` to retrieve the complete project goal information
- Understand the project vision, MVP scope, and full product vision
- Identify the technical requirements and constraints
- Review user personas and their specific needs

### 4. Analyze Task Requirements
- Determine what specific agent capabilities are needed for this project
- Identify the technical expertise required based on the project goal
- Define the personality traits that would make an agent most effective
- Consider the project's complexity and domain-specific requirements

### 5. Agent Prompt Design Strategy

#### 5.1 Personality and Traits Definition
Based on the project goal, user personas, and agent target users, define:
- **Communication style**: How the agent should interact and communicate with the specific users who will interact with it
- **Problem-solving approach**: How the agent tackles challenges relevant to the project domain and user needs
- **Collaboration patterns**: How the agent works with the target users, considering their roles and expertise levels
- **Decision-making style**: How the agent makes choices and prioritizes based on user needs and expectations
- **Work ethic and values**: What drives the agent's behavior aligned with project goals and user success criteria
- **Adaptability traits**: How the agent handles change and uncertainty while maintaining effectiveness for target users

#### 5.2 Technical Expertise Specification
Based on the project requirements, define:
- **Core technical skills**: Primary technologies and frameworks
- **Domain expertise**: Industry-specific knowledge and patterns
- **Architecture understanding**: System design and integration capabilities
- **Quality standards**: Testing, documentation, and code quality approaches
- **Performance mindset**: Optimization and scalability considerations
- **Security awareness**: Security-first thinking and practices

#### 5.3 Behavioral Patterns
Define how the agent should behave:
- **Initiative patterns**: When and how to take initiative
- **Learning approach**: How to acquire new knowledge and skills
- **Mentoring style**: How to help others and share knowledge
- **Conflict resolution**: How to handle disagreements and challenges
- **Innovation approach**: How to suggest improvements and new ideas

### 6. Create Agent Prompt Structure
Create a comprehensive agent prompt with the following sections:

#### 6.1 Agent Identity and Role
- Clear definition of who the agent is and their primary role
- Mission statement aligned with project goals and user needs
- Core values and principles that guide behavior
- Understanding of target user personas and their specific requirements

#### 6.2 Personality Profile
- Detailed personality traits and characteristics
- Communication style and preferences
- Work approach and methodology
- Collaboration and team interaction patterns

#### 6.3 Technical Expertise
- Specific technical skills and knowledge areas
- Domain expertise and industry experience
- Architecture and design capabilities
- Quality and performance standards

#### 6.4 Behavioral Guidelines
- Decision-making frameworks and approaches
- Problem-solving methodologies
- Learning and adaptation strategies
- Innovation and improvement approaches

#### 6.5 Interaction Patterns
- How to engage with different types of tasks
- Communication protocols and standards
- Feedback and iteration approaches
- Conflict resolution and collaboration methods

### 7. Apply Advanced Techniques

#### 7.1 Constitutional AI Principles
- Define ethical guidelines and safety constraints for the agent
- Establish principles for helpful, harmless, and honest behavior
- Set boundaries for appropriate agent behavior and decision-making

#### 7.2 Context Management
- Design the agent prompt to work across different contexts
- Ensure the prompt scales with project complexity
- Create modular components that can be adapted as needed

### 8. Validation and Refinement
- Test the agent prompt against various scenarios from the project goal memory
- Ensure the prompt covers all necessary aspects without duplicating existing rules
- Verify the prompt addresses the needs of all user personas identified in the project goal
- Verify the prompt is specific enough to be actionable
- Refine based on prompt engineering best practices

### 9. Create Agent Mode File
- Create `agent-mode.md` file in the `.cursor/modes/` directory
- Structure the file with clear sections and formatting
- Include the complete agent prompt with all defined characteristics
- Ensure the file is ready for use in the development workflow

## Expected Outcome
- Comprehensive `agent-mode.md` file created in the `.cursor/modes/` directory
- Agent prompt that defines personality, traits, and technical expertise
- Clear alignment between agent characteristics and project requirements
- No duplication of existing project rules or command information
- Agent prompt optimized using latest prompt engineering techniques
