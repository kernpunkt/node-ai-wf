# Workflow Step: Refactor

## Purpose
Improve code quality based on review findings.

## Input Required
- Story/Issue ID

## Process
1. **Retrieve Review Findings**
   - Search CRV memories: STORY-123, status/active, topic/review
   - Analyze review findings and recommendations
   - Prioritize refactoring improvements based on impact

2. **Apply Refactoring Improvements**
   - Apply refactoring improvements based on review findings
   - Focus on high-impact improvements first
   - Ensure refactoring maintains functionality
   - Follow clean code principles and best practices

3. **Validate Refactoring**
   - Ensure all tests still pass after refactoring
   - Run BDD tests to verify functionality is maintained
   - Run unit tests to ensure no regressions
   - Check code quality and standards compliance

4. **Update Documentation**
   - **Update CRV memories**: Change status from active to resolved for review findings that were addressed
   - Document any new patterns or improvements discovered
   - Update implementation documentation if needed

5. **Iterative Refactoring**
   - Continue refactoring until all high-priority issues are addressed
   - Re-run tests after each refactoring change
   - Ensure code quality continues to improve
   - Document any remaining issues for future consideration

## Output
- Refactored implementation files (organized by component/feature)
- Improved code quality and maintainability
- Updated CRV memories with resolved issues
- All tests passing after refactoring

## Success Criteria
- Implementation files refactored with improved quality
- All tests pass after refactoring
- CRV memories updated with resolved issues
- Code quality standards improved
- Refactoring ready for security review

## MCP Tools Required
- Memory Tools: For retrieving and updating CRV memories
