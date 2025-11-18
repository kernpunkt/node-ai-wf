# Workflow Step: Refactor Security

## Purpose
Address security issues identified in security review.

## Input Required
- Story/Issue ID

## Process
1. **Retrieve Security Findings**
   - Search SEC memories: STORY-123, status/active
   - Analyze security findings and recommendations
   - Prioritize security fixes based on severity and impact

2. **Apply Security Fixes**
   - Apply security fixes based on security findings
   - Focus on high-severity issues first
   - Implement security best practices
   - Ensure security fixes maintain functionality

3. **Validate Security Fixes**
   - Ensure all tests still pass after security refactoring
   - Run BDD tests to verify functionality is maintained
   - Run unit tests to ensure no regressions
   - Check that security vulnerabilities are properly addressed

4. **Update Security Documentation**
   - **Update SEC memories**: Change status from active to resolved for security issues that were addressed
   - Document any new security patterns or improvements discovered
   - Update security implementation documentation if needed

5. **Iterative Security Improvement**
   - Continue security improvements until all high-priority issues are addressed
   - Re-run tests after each security fix
   - Ensure security posture continues to improve
   - Document any remaining security considerations for future review

## Output
- Security-hardened implementation files (organized by component/feature)
- Improved security posture
- Updated SEC memories with resolved issues
- All tests passing after security refactoring

## Success Criteria
- Implementation files security-hardened with improved security
- All tests pass after security refactoring
- SEC memories updated with resolved issues
- Security vulnerabilities addressed
- Security refactoring ready for documentation

## MCP Tools Required
- Memory Tools: For retrieving and updating SEC memories
