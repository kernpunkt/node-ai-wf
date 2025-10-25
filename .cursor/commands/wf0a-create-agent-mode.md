# Workflow Step 0a: Create Agent Mode

## Objective
Create a comprehensive agent prompt for the perfect team member based on the project goal, focusing on personality, traits, and technical expertise rather than duplicating existing project rules or command information.

## Instructions

### 1. Read Project Goal and Search Memories
- Read the `projectgoal.md` file from the project root directory
- Understand the project vision, MVP scope, and full product vision
- Identify the technical requirements and constraints
- Search for relevant existing memories using memory-tools:
  - Search for ADR memories related to team composition or role definitions
  - Search for CTX memories that provide context about project team needs or constraints
  - Search for DOC memories that document team member patterns or expertise requirements
  - Link to related memories when they provide valuable context for agent creation

### 2. Research Current Best Practices
- Use web search to identify latest techniques for creating AI agent prompts
- Research current best practices for defining agent personalities and technical expertise
- Look up effective patterns for team member role definition in AI systems
- Stay informed about latest developments in agent prompt engineering

### 3. Analyze Task Requirements
- Determine what specific agent capabilities are needed for this project
- Identify the technical expertise required based on the project goal
- Define the personality traits that would make an agent most effective
- Consider the project's complexity and domain-specific requirements

### 4. Agent Prompt Design Strategy

#### 4.1 Personality and Traits Definition
Based on the project goal, define:
- **Communication style**: How the agent should interact and communicate
- **Problem-solving approach**: How the agent tackles challenges
- **Collaboration patterns**: How the agent works with others
- **Decision-making style**: How the agent makes choices and prioritizes
- **Work ethic and values**: What drives the agent's behavior
- **Adaptability traits**: How the agent handles change and uncertainty

#### 4.2 Technical Expertise Specification
Based on the project requirements, define:
- **Core technical skills**: Primary technologies and frameworks
- **Domain expertise**: Industry-specific knowledge and patterns
- **Architecture understanding**: System design and integration capabilities
- **Quality standards**: Testing, documentation, and code quality approaches
- **Performance mindset**: Optimization and scalability considerations
- **Security awareness**: Security-first thinking and practices

#### 4.3 Behavioral Patterns
Define how the agent should behave:
- **Initiative patterns**: When and how to take initiative
- **Learning approach**: How to acquire new knowledge and skills
- **Mentoring style**: How to help others and share knowledge
- **Conflict resolution**: How to handle disagreements and challenges
- **Innovation approach**: How to suggest improvements and new ideas

### 5. Create Agent Prompt Structure
Create a comprehensive agent prompt with the following sections:

#### 5.1 Agent Identity and Role
- Clear definition of who the agent is and their primary role
- Mission statement aligned with project goals
- Core values and principles that guide behavior

#### 5.2 Personality Profile
- Detailed personality traits and characteristics
- Communication style and preferences
- Work approach and methodology
- Collaboration and team interaction patterns

#### 5.3 Technical Expertise
- Specific technical skills and knowledge areas
- Domain expertise and industry experience
- Architecture and design capabilities
- Quality and performance standards

#### 5.4 Behavioral Guidelines
- Decision-making frameworks and approaches
- Problem-solving methodologies
- Learning and adaptation strategies
- Innovation and improvement approaches

#### 5.5 Interaction Patterns
- How to engage with different types of tasks
- Communication protocols and standards
- Feedback and iteration approaches
- Conflict resolution and collaboration methods

### 6. Apply Advanced Techniques

#### 6.1 Constitutional AI Principles
- Define ethical guidelines and safety constraints for the agent
- Establish principles for helpful, harmless, and honest behavior
- Set boundaries for appropriate agent behavior and decision-making

#### 6.2 Context Management
- Design the agent prompt to work across different contexts
- Ensure the prompt scales with project complexity
- Create modular components that can be adapted as needed

### 7. Validation and Refinement
- Test the agent prompt against various scenarios from the project goal
- Ensure the prompt covers all necessary aspects without duplicating existing rules
- Verify the prompt is specific enough to be actionable
- Refine based on prompt engineering best practices

### 8. Create Agent Mode File
- Create `agent-mode.md` file in the project root directory
- Structure the file with clear sections and formatting
- Include the complete agent prompt with all defined characteristics
- Ensure the file is ready for use in the development workflow

### 9. Update Project Goal Reference
- Add reference to the created agent mode in the project goal document
- Link the agent characteristics to specific project requirements
- Ensure alignment between project goals and agent capabilities

### 10. Capture Agent Creation Insights and Create Memories
During the agent creation process, capture any valuable insights that emerge:
- **Agent design patterns**: Effective approaches for defining AI agent characteristics
- **Team composition insights**: How agent design supports project team dynamics
- **Technical expertise mapping**: How to align agent capabilities with project needs
- **Personality-role alignment**: How agent personality traits support project success

Before creating new memories:
- Call `get_usage_info` to understand how memories should be written
- Use memory-tools to search for related existing memories to avoid redundancy
- Link to related memories when appropriate

Create appropriate memories using memory-tools:
- **ADR memories**: For significant architectural decisions about agent design and team composition
- **CTX memories**: For context about why certain agent characteristics were chosen
- **DOC memories**: For documenting agent creation patterns and best practices

### 11. Commit Changes
After completing the agent mode creation:
- Stage all agent-related changes: `git add .`
- Verify what will be committed: `git status`
- Commit using conventional commit format: `git commit -m "feat: create agent mode for project team member"`
- **Note**: Do not push the branch yet - that will be done in step 9

## Expected Outcome
- Comprehensive `agent-mode.md` file created in the project root directory
- Agent prompt that defines personality, traits, and technical expertise
- Clear alignment between agent characteristics and project requirements
- No duplication of existing project rules or command information
- Agent prompt optimized using latest prompt engineering techniques
- Any agent creation insights captured as ADR, CTX, or DOC memories
- Changes committed to git with conventional commit format
- Agent mode ready for use in the development workflow
