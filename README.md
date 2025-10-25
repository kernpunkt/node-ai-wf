# Node Basic Template

A comprehensive Node.js project template designed for AI-first development workflows. This template provides a solid foundation with modern tooling, MCP (Model Context Protocol) integrations, and development best practices.

## 🚀 Features

- **AI-First Development**: Optimized for AI-assisted coding with MCP integrations
- **GitHub Integration**: Access and manipulate GitHub issues and pull requests
- **Jira Integration**: Create and edit Jira stories and tasks
- **Memory Tools**: AI memory and documentation management with `llm-mem`
- **Documentation Coverage**: CLI tool for documentation coverage reports
- **Modern Tooling**: TypeScript, ESLint, Prettier, Vitest, and more
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
| `pnpm test` | Run test suite |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:full` | Run complete test suite (tests + linting + type checking) |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues automatically |
| `pnpm format` | Format code with Prettier |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm doc:coverage` | Generate documentation coverage report |
| `pnpm deps:check` | Check for outdated dependencies |
| `pnpm deps:update` | Update all dependencies to latest versions |

## 🏗️ Project Structure

```
node-basic/
├── .cursor/                 # Cursor IDE configuration
│   ├── commands/           # Workflow commands
│   ├── modes/              # Development modes
│   ├── rules/              # Code standards and rules
│   └── mcp.json           # MCP server configuration
├── docs/                   # Documentation
│   ├── db/                # Memory database
│   └── md/                # Markdown documentation
├── src/                    # Source code
│   └── examples/          # Example code and utilities
│       ├── math.ts        # Math utility examples
│       ├── string-utils.ts # String utility examples
│       ├── logger.ts      # Logging utility examples
│       └── README.md      # Examples documentation
├── tests/                  # Test suite
│   ├── setup.ts           # Test configuration
│   ├── *.test.ts          # Test files
│   └── README.md          # Testing documentation
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── vitest.config.ts       # Test configuration
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

## 🤖 AI-First Development Workflow

This template includes a comprehensive set of Cursor commands in the `.cursor/commands/` directory that guide you through an AI-first development process. These commands provide structured workflows for different phases of development.

### Available Workflow Commands

| Command | Purpose | Description |
|---------|---------|-------------|
| `wf0-define-goal` | Project Planning | Define project vision, requirements, and create comprehensive project goals |
| `wf1-create-issue` | Issue Management | Create GitHub issues with clear "what" requirements (not "how") |
| `wf1a-create-subissues` | Issue Breakdown | Break down complex issues into manageable sub-issues |
| `wf1b-edit-issue` | Issue Editing | Edit existing GitHub issues to update requirements or scope |
| `wf2-plan-implementation-and-create-branch` | Implementation Planning | Analyze issues, create implementation plan, and establish development branch |
| `wf3-plan-unit-test-strategy` | Unit Test Planning | Define comprehensive unit test strategy and test cases |
| `wf3.1-plan-integration-test-strategy` | Integration Test Planning | Define comprehensive integration test strategy and test cases |
| `wf4-create-unit-tests` | Unit Test Implementation | Implement unit tests following TDD principles (red phase) |
| `wf4.1-create-integration-tests` | Integration Test Implementation | Implement integration tests for component interactions |
| `wf4a-continue-unit-tests` | Unit Test Completion | Continue or complete unit test implementation |
| `wf4.1a-continue-integration-tests` | Integration Test Completion | Continue or complete integration test implementation |
| `wf5-write-code` | Code Implementation | Implement features following TDD principles (green phase) |
| `wf5a-continue-code` | Code Completion | Continue or complete code implementation |
| `wf6-review-code` | Code Review | Review code quality, performance, and adherence to standards |
| `wf6a-create-improvements-issues` | Improvement Tracking | Create GitHub issues for future improvements identified in code review |
| `wf7-refactor-code` | Code Refactoring | Refactor code for better maintainability and performance |
| `wf7a-continue-refactor` | Refactoring Completion | Continue or complete refactoring process |
| `wf8-write-documentation` | Documentation | Create comprehensive documentation and capture insights as memories |
| `wf9-commit-push-pullrequest` | Version Control | Commit changes, push branch, and create pull request that auto-closes issues |

### How to Use Cursor Commands

Commands are used directly in the Cursor chat interface:

1. **Open Cursor IDE** with your project
2. **Start a chat** with the AI assistant
3. **Type the command** using the "/" prefix followed by the filename:
   - For initial commands: `wf0-define-goal`, `wf1-create-issue`
   - For issue-specific commands (wf1a onwards): `wf1a-create-subissues github issue 123`
4. **Follow the Instructions**: Each command provides detailed step-by-step guidance
5. **AI Integration**: Commands work seamlessly with MCP tools for GitHub, Jira, and memory management

#### Command Usage Examples:
- `/wf0-define-goal` - Start project planning
- `/wf1-create-issue` - Create new GitHub issues
- `/wf1b-edit-issue github issue 123` - Edit existing issue #123
- `/wf2-plan-implementation-and-create-branch github issue 123` - Plan implementation for issue #123
- `/wf3-plan-unit-test-strategy github issue 123` - Plan unit tests for issue #123
- `/wf4-create-unit-tests github issue 123` - Implement unit tests for issue #123
- `/wf5-write-code github issue 123` - Implement code for issue #123
- `/wf6-review-code github issue 123` - Review code for issue #123
- `/wf9-commit-push-pullrequest github issue 123` - Complete the workflow for issue #123

### Workflow Philosophy

The commands follow these principles:
- **AI-First**: Designed to work optimally with AI assistants
- **Test-Driven**: Tests are written before implementation
- **Memory-Driven**: Leverages AI memory for context and learning
- **Iterative**: Supports incremental development and refinement
- **Quality-Focused**: Emphasizes code review and refactoring

### Getting Started with Workflows

1. **Start with `wf0-define-goal`** to establish your project vision
2. **Use `wf1-create-issue`** to break down work into manageable tasks
3. **Follow the sequence** through planning, testing, implementation, and review
4. **Use continuation commands** (`wf4a`, `wf4.1a`, `wf5a`, `wf7a`) when work spans multiple sessions
5. **Plan both unit and integration tests** using `wf3-plan-unit-test-strategy` and `wf3.1-plan-integration-test-strategy`
6. **Track improvements** using `wf6a-create-improvements-issues` after code review

## 🎭 Custom Agent Modes

This template includes pre-configured agent modes in the `.cursor/modes/` directory that you can use to create specialized AI assistants for different aspects of development. These files serve as templates that you manually copy into Cursor's custom agent system.

> **Note**: For detailed information about Cursor agent modes, see the [official Cursor documentation](https://cursor.com/de/docs/agent/modes).

### Available Agent Modes

| Mode | Purpose | Description |
|------|---------|-------------|
| `team-member` | Software Architecture | Specialized agent for architectural decisions, TypeScript development, and code design |

### How to Use Agent Modes

1. **Open Cursor IDE** with your project
2. **Access Agent Settings**: Go to Settings → Agents
3. **Create Custom Agent**: Click "Create Agent" or "New Agent"
4. **Copy Agent Prompt**: Copy the content from `.cursor/modes/team-member.md`
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
- **Build failures**: Run `pnpm install` and `pnpm run build` to ensure all dependencies are installed run `pnpm approve-builds` if you see a warning about it
- **Type errors**: Run `pnpm type-check` to identify TypeScript issues
- **Linting errors**: Run `pnpm lint:fix` to automatically fix common issues

### Getting Help

- Check the [Issues](https://github.com/your-org/node-basic/issues) page
- Review the documentation in the `docs/` directory
- Ensure you're using the correct Node.js and pnpm versions
- ask Olli Blum