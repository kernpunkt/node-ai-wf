# Node AI Workflow Template

A comprehensive Node.js project template designed for AI-first development with BDD/TDD workflow support. This template provides a solid foundation with modern tooling, MCP (Model Context Protocol) integrations, comprehensive testing frameworks (Vitest & Cucumber), and development best practices.

## 🚀 Features

- **AI-First Development**: Optimized for AI-assisted coding with MCP integrations
- **BDD/TDD Workflow**: Comprehensive Behavior-Driven and Test-Driven Development workflow
- **BDD Support**: Cucumber integration with Gherkin syntax for acceptance tests
- **TDD Support**: Vitest for unit testing with comprehensive coverage
- **GitHub Integration**: Access and manipulate GitHub issues and pull requests
- **Jira Integration**: Create and edit Jira stories and tasks
- **Memory Tools**: AI memory and documentation management with `llm-mem`
- **Documentation Coverage**: CLI tool for documentation coverage reports
- **Modern Tooling**: TypeScript, ESLint, Prettier, Vitest, and Cucumber
- **Clean Code Standards**: Built-in linting and formatting rules

## 📋 Requirements

- **Node.js**: Version 24.3.0 or higher
- **pnpm**: Version 10.15.0 or higher ([Installation Guide](https://pnpm.io/installation))
- **SSH Key**: Working SSH key setup for GitHub (preferably without passphrase)

## 🛠️ Getting Started

1. **Create a new repository from this template:**
   - Click the "Use this template" button on GitHub
   - Choose "Create a new repository"
   - Name your new repository and configure settings
   - Click "Create repository from template"

2. **Clone your new repository:**
   ```bash
   git clone <your-new-repo-url>
   cd <your-repo-name>
   pnpm install
   ```

3. **Build packages:**
   ```bash
   pnpm run build
   ```

4. **Configure MCP tools:**
   - Create `.env.github-mcp` based on `.env.github-mcp.example` in the `.cursor` directory
   - Update `mcp.json` with your repository details

5. **Enable MCPs in Cursor:**
   - Configure the MCP servers in your Cursor settings
   - Restart Cursor to activate the integrations

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build the project for production |
| `pnpm start` | Start the production server |
| `pnpm test` | Run TDD test suite (Vitest) |
| `pnpm test:bdd` | Run BDD test suite (Cucumber) |
| `pnpm test:all` | Run both TDD and BDD tests |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:full` | Run complete validation (tests + linting + type checking + formatting) |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues automatically |
| `pnpm format` | Format code with Prettier |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm doc:coverage` | Generate documentation coverage report |
| `pnpm deps:check` | Check for outdated dependencies |
| `pnpm deps:update` | Update all dependencies to latest versions |

## 🏗️ Project Structure

```
node-ai-wf/
├── .cursor/                 # Cursor IDE configuration
│   ├── commands/           # BDD/TDD workflow commands
│   ├── modes/              # Agent mode templates
│   ├── rules/              # Code standards and rules
│   └── mcp.json           # MCP server configuration
├── docs/                   # Documentation
│   ├── db/                # Memory database (FlexSearch)
│   └── md/                # Markdown documentation
├── features/               # BDD feature files (Cucumber)
│   ├── *.feature          # Gherkin feature files
│   └── README.md          # BDD documentation
├── src/                    # Source code
│   ├── examples/          # Example code and utilities
│   │   ├── math.ts        # Math utility examples
│   │   ├── string-utils.ts # String utility examples
│   │   ├── logger.ts      # Logging utility examples
│   │   └── README.md      # Examples documentation
│   ├── index.ts           # Main entry point
│   └── logger.ts          # Winston logging setup
├── tests/                  # Test suite
│   ├── steps/             # BDD step definitions
│   │   ├── *.steps.ts    # Cucumber step definitions
│   │   └── README.md     # Step definition docs
│   ├── setup.ts           # Test configuration
│   ├── *.test.ts          # TDD unit tests
│   └── README.md          # Testing documentation
├── reports/                # Test reports
│   ├── cucumber-report.html # BDD HTML report
│   └── cucumber-report.json # BDD JSON report
├── scripts/                # Utility scripts
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── vitest.config.ts       # Vitest configuration
└── cucumber.config.cjs    # Cucumber configuration
```

## 📚 Template Examples

This template includes example code in the `/src/examples/` directory to demonstrate:

- **Code Structure**: How to organize utility modules and functions
- **Testing Patterns**: Comprehensive test examples for different scenarios
- **TypeScript Usage**: Type-safe development patterns and best practices
- **Node.js Patterns**: Common Node.js development patterns and utilities

### Example Files

- **`math.ts`** - Math utility functions (add, subtract, multiply, divide, power, factorial)
- **`string-utils.ts`** - String manipulation utilities (capitalize, reverse, isPalindrome, etc.)
- **`logger.ts`** - Winston-based logging setup and utilities

### Using Examples

- **Reference**: Use examples as reference for structuring your own modules
- **Testing**: Examples are fully tested to demonstrate testing patterns
- **Coverage**: Example files are excluded from coverage reporting (they're just templates)
- **Customization**: Modify or remove examples based on your project needs

> **Note**: When you run `pnpm test:coverage`, the coverage report will show 0% initially since only example code exists. Once you add your own production code to `/src/` (outside the examples directory), coverage will measure your actual code.

## 🧪 BDD/TDD Testing Approach

This template implements a comprehensive testing strategy combining Behavior-Driven Development (BDD) and Test-Driven Development (TDD):

### TDD (Test-Driven Development)
- **Framework**: Vitest for fast, isolated unit tests
- **Location**: `tests/*.test.ts` files
- **Purpose**: Test individual functions and modules in isolation
- **Pattern**: Red-Green-Refactor cycle
- **Run**: `pnpm test`

### BDD (Behavior-Driven Development)
- **Framework**: Cucumber with TypeScript step definitions
- **Location**: 
  - Feature files: `features/*.feature` (Gherkin syntax)
  - Step definitions: `tests/steps/*.steps.ts`
- **Purpose**: Test user stories and acceptance criteria from business perspective
- **Pattern**: Given-When-Then scenarios
- **Run**: `pnpm test:bdd`

### Combined Testing
- **Run both**: `pnpm test:all` (TDD + BDD)
- **Full validation**: `pnpm test:full` (tests + linting + type checking + formatting)
- **Reports**: Generated in `reports/` directory

## 🤖 AI-First Development Workflow

This template includes a comprehensive BDD/TDD development workflow optimized for LLM execution. The workflow combines Behavior-Driven Development (BDD) and Test-Driven Development (TDD) practices with memory-based knowledge management.

### Workflow Overview

The workflow follows a systematic approach from project planning to pull requests, focusing on one user story at a time and leveraging AI memory tools for context and documentation.

### Available Workflow Commands

| Command | Purpose | Description |
|---------|---------|-------------|
| `wf0-define-goal` | Project Planning | Define project vision, requirements, user personas, and MVP scope |
| `wf0a-create-threatmodel` | Threat Modeling | Create threat model documentation for security assessment foundation |
| `wf1-create-agent-mode` | Agent Configuration | Create AI agent personality and technical expertise profile |
| `wf2-create-user-stories` | Story Creation | Generate user stories from project goals and create them in Jira or GitHub |
| `wf3-translate-to-bdd` | BDD Translation | Convert user stories into detailed BDD scenarios with Gherkin syntax |
| `wf4a-plan-architecture` | Architecture Design | Design system architecture, interfaces, and data models |
| `wf4b-plan-implementation` | Implementation Planning | Create detailed implementation plan with testing strategy |
| `wf5-write-bdd-steps` | BDD Step Definitions | Implement reusable BDD step definitions in TypeScript |
| `wf6-write-unit-tests` | Unit Test Implementation | Create comprehensive unit test suite with Vitest |
| `wf7-write-implementation` | Code Implementation | Implement features following TDD principles (green phase) |
| `wf7a-validate-implementation` | Implementation Validation | Validate implementation with BDD tests, unit tests, formatting, and linting |
| `wf8-review-implementation` | Code Review | Comprehensive code review and quality assessment |
| `wf8a-refactor` | Code Refactoring | Improve code quality based on review findings |
| `wf9-security-review` | Security Assessment | Comprehensive security vulnerability assessment |
| `wf9a-refactor-security` | Security Hardening | Address security issues identified in security review |
| `wf10-write-documentation` | Documentation | Create comprehensive documentation for humans and LLMs |
| `wf11-create-pull-request` | PR Creation | Package implementation for review and integration |

### How to Use Cursor Commands

Commands are used directly in the Cursor chat interface:

1. **Open Cursor IDE** with your project
2. **Start a chat** with the AI assistant
3. **Type the command** using the "/" prefix followed by the filename:
   - For initial commands: `wf0-define-goal`, `wf1-create-agent-mode`
   - For story-specific commands: `wf3-translate-to-bdd github issue 123`
4. **Follow the Instructions**: Each command provides detailed step-by-step guidance
5. **AI Integration**: Commands work seamlessly with MCP tools for GitHub, Jira, and memory management

#### Command Usage Examples:
- `/wf0-define-goal` - Start project planning
- `/wf1-create-agent-mode` - Create custom AI agent mode
- `/wf2-create-user-stories` - Create user stories in Jira or GitHub
- `/wf3-translate-to-bdd github issue 123` - Translate story #123 to BDD scenarios
- `/wf4a-plan-architecture github issue 123` - Plan architecture for story #123
- `/wf4b-plan-implementation github issue 123` - Plan implementation for story #123
- `/wf5-write-bdd-steps github issue 123` - Implement BDD step definitions for story #123
- `/wf6-write-unit-tests github issue 123` - Write unit tests for story #123
- `/wf7-write-implementation github issue 123` - Implement code for story #123
- `/wf7a-validate-implementation github issue 123` - Validate implementation for story #123
- `/wf8-review-implementation github issue 123` - Review code for story #123
- `/wf9-security-review github issue 123` - Review security for story #123
- `/wf10-write-documentation github issue 123` - Write documentation for story #123
- `/wf11-create-pull-request github issue 123` - Create PR for story #123

### Workflow Philosophy

The commands follow these principles:
- **One user story at a time**: Focus on completing one user story before moving to the next
- **BDD-first approach**: Start with user stories, translate to BDD scenarios, then implement
- **Memory-driven**: Use MCP memory tools for architectural decisions, documentation, and context
- **Quality gates**: Built-in review and validation steps ensure code quality
- **LLM-optimized**: Each step designed for effective LLM execution

### Getting Started with Workflows

1. **Start with `wf0-define-goal`** to establish your project vision and user personas
2. **Use `wf1-create-agent-mode`** to create a specialized AI agent for your project
3. **Run `wf2-create-user-stories`** to generate and create user stories in Jira or GitHub
4. **Select a story** and run `wf3-translate-to-bdd` to convert it to BDD scenarios
5. **Follow the sequence** through architecture, implementation, testing, and review
6. **Complete the cycle** with `wf7a-validate-implementation`, `wf8-review-implementation`, and `wf11-create-pull-request`

### Memory Management

The workflow leverages MCP memory tools to store and retrieve:
- **DEF**: Project definitions, goals, user personas, and MVP scope
- **ADR**: Architecture Decision Records with governance and rationale
- **ARC**: Story-specific architectural decisions and component design
- **IMP**: Implementation plans, testing strategies, and development approaches
- **DOC**: Code documentation, business logic, edge cases, and API guides
- **SEC**: Security assessments, vulnerability analysis, and best practices

## 🎭 Custom Agent Modes

This template includes pre-configured agent modes in the `.cursor/modes/` directory that you can use to create specialized AI assistants for different aspects of development. These files serve as templates that you manually copy into Cursor's custom agent system.

> **Note**: For detailed information about Cursor agent modes, see the [official Cursor documentation](https://cursor.com/de/docs/agent/modes).

### Available Agent Modes

| Mode | Purpose | Description |
|------|---------|-------------|
| `prompt-engineer` | Prompt Engineering | World-class prompt engineering expertise with cutting-edge techniques and methodologies |

### How to Use Agent Modes

1. **Open Cursor IDE** with your project
2. **Access Agent Settings**: Go to Settings → Agents
3. **Create Custom Agent**: Click "Create Agent" or "New Agent"
4. **Copy Agent Prompt**: Copy the content from `.cursor/modes/prompt-engineer.md`
5. **Paste into Agent**: Paste the content into the agent's system prompt field
6. **Save and Name**: Give your agent a descriptive name and save
7. **Select Agent**: Choose your custom agent from the agent selector in chat

### Creating Custom Agent Modes

You can create your own agent modes by:

1. **Create a new file** in `.cursor/modes/` directory (for template storage)
2. **Define the agent persona** with specific expertise and communication style
3. **Include domain knowledge** relevant to your project needs
4. **Set clear guidelines** for how the agent should behave
5. **Copy the content** from your `.cursor/modes/` file
6. **Create Custom Agent** in Cursor Settings → Agents
7. **Paste the content** into the agent's system prompt field
8. **Save and test** the agent in Cursor chat

#### Example Agent Mode Structure:
```markdown
# Your Custom Agent Mode

You are now a [SPECIALIZED ROLE] with expertise in [DOMAIN].

## Core Principles
- [Key principles the agent should follow]

## Expertise Areas
- [Specific areas of knowledge]

## Communication Style
- [How the agent should communicate]

## Success Metrics
- [What defines success for this agent]
```

### Benefits of Agent Modes

- **Specialized Expertise**: Each mode focuses on specific aspects of development
- **Consistent Behavior**: Agents maintain consistent personas across conversations
- **Domain Knowledge**: Pre-loaded with relevant technical knowledge
- **Customizable**: Create modes tailored to your project's specific needs
- **Team Alignment**: Standardized approaches across team members

## 🔄 Updating from Template

When you create a repository from this GitHub template, it creates a completely independent copy with no automatic connection to pull updates. Here are the main approaches to get template updates:

### Add Template as Remote (Recommended)

This is the most flexible approach:

1. **Add the template repo as a remote:**
   ```bash
   git remote add template https://github.com/original-owner/template-repo.git
   ```

2. **Fetch the latest changes:**
   ```bash
   git fetch template
   ```

3. **Merge or cherry-pick changes:**
   ```bash
   # To merge all changes from template's main branch
   git merge template/main
   
   # Or to cherry-pick specific commits
   git cherry-pick <commit-hash>
   ```

4. **Resolve conflicts and push:**
   ```bash
   git push origin main
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

- **MCP not working**: Ensure your `.env.github-mcp` file is properly configured
- **Build failures**: Run `pnpm install` and `pnpm run build` to ensure all dependencies are installed
- **Test failures**: Run `pnpm test:all` to run both TDD and BDD tests
- **Type errors**: Run `pnpm type-check` to identify TypeScript issues
- **Linting errors**: Run `pnpm lint:fix` to automatically fix common issues
- **BDD test issues**: Check the `features/` directory for Gherkin syntax errors

### Getting Help

- Check the [Issues](https://github.com/kernpunkt/node-ai-wf/issues) page
- Review the documentation in the `docs/` directory
- Ensure you're using the correct Node.js and pnpm versions
- Contact Olli Blum for assistance