# Workflow Step 9: Commit and Create Pull Request

## Objective
Finalize the implementation by staging all changes, committing using conventional commits, publishing the branch, and creating a pull request that automatically closes the GitHub issue.

## Instructions

### 1. Read GitHub Issue
- Read the GitHub issue that was mentioned after this command using `get_issue` to get the issue description
- Read all issue comments using `get_issue_comments` to get the complete context
- Review the final implementation status and any documentation created
- Ensure all work is complete and ready for commit

### 2. Stage All Changes
- Stage all unstaged changes: `git add .`
- Verify what will be committed: `git status`
- Ensure all intended changes are staged and no unwanted files are included

### 3. Commit Changes Using Conventional Commits
Create a commit message following conventional commit standards:
- **Format**: `type(scope): description`
- **Types**: 
  - `feat` - New feature
  - `fix` - Bug fix
  - `refactor` - Code refactoring
  - `docs` - Documentation changes
  - `test` - Test additions or changes
  - `chore` - Maintenance tasks
- **Scope**: Brief description of what area was changed
- **Description**: Clear, concise description of the change
- **Examples**:
  - `feat(auth): add user authentication system`
  - `fix(api): resolve memory leak in data processing`
  - `refactor(ui): improve component structure`

### 4. Publish the Current Branch
- Push the current branch to the remote repository: `git push -u origin <branch-name>`
- Ensure the branch is available for pull request creation

### 5. Create Pull Request
Create a pull request that will automatically close the issue:

#### Pull Request Title
- Use a clear, descriptive title that summarizes the changes
- Reference the issue number if appropriate

#### Pull Request Description
Include the following to automatically close the issue:
- **Issue Reference**: Use one of the supported keywords followed by the issue number:
  - `Closes #<issue-number>` - Closes the issue when merged
  - `Fixes #<issue-number>` - Alternative syntax that also closes the issue
  - `Resolves #<issue-number>` - Another alternative syntax
- **Implementation Summary**: Brief overview of what was implemented
- **Testing**: Note that all tests pass and code quality checks are met
- **Documentation**: Reference any documentation updates or memories created

#### Supported Keywords for Auto-Closing
According to [GitHub documentation](https://docs.github.com/de/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue), these keywords followed by the issue number will automatically close the issue when the PR is merged to the default branch:
- `close`, `closes`, `closed`
- `fix`, `fixes`, `fixed`
- `resolve`, `resolves`, `resolved`

#### Example Pull Request Description
```
## Summary
Implements user authentication system with JWT tokens and role-based access control.

## Changes
- Added authentication middleware
- Created user management components
- Implemented secure password hashing
- Added comprehensive test coverage

## Testing
- All tests pass
- Code quality checks (ESLint, Prettier) pass
- Manual testing completed

## Documentation
- Updated API documentation
- Created ADR for authentication architecture
- Added usage examples

Closes #123
```

## Expected Outcome
- All changes are committed with conventional commit format
- Branch is published to the remote repository
- Pull request is created and properly linked to the issue
- Issue will automatically close when the pull request is merged
- Implementation is ready for review and merging

## Workflow Complete
The implementation workflow is now complete. The pull request can be reviewed, and once approved and merged, the issue will automatically close.
