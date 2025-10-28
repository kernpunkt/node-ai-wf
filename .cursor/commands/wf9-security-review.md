# Workflow Step: Security Review

## Purpose
Comprehensive security assessment.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: story_id/STORY-123, status/active
   - Search IMP memories: story_id/STORY-123, status/active

2. **Identify Files for Security Review**
   - **Identify implementation files** based on ARC memories (component-specific architecture) and IMP memories
   - Review all files created or modified for this story
   - Focus on security-sensitive components and interfaces

3. **Security Vulnerability Assessment**
   - Identify potential security vulnerabilities
   - Check for common security issues (OWASP Top 10)
   - Review code for security anti-patterns
   - Analyze attack vectors and potential exploits

4. **Input Validation Review**
   - Check input validation and sanitization
   - Review data validation patterns
   - Check for injection vulnerabilities
   - Validate error handling and information disclosure

5. **Authentication and Authorization Check**
   - Review authentication mechanisms
   - Check authorization patterns and access controls
   - Validate session management
   - Review password handling and storage

6. **Data Protection Validation**
   - Check data encryption and protection
   - Review sensitive data handling
   - Validate data transmission security
   - Check for data leakage vulnerabilities

7. **Security Best Practices Audit**
   - Review security coding practices
   - Check for security configuration issues
   - Validate security logging and monitoring
   - Review security testing coverage

8. **Document Security Findings**
   - Create SEC memories with security findings and patterns
   - Tag SEC memories with story ID and status/active
   - Document specific security issues and recommendations
   - Store security patterns for future reference
   - **⚠️ CRITICAL: Optimize for token efficiency**
     - Use bullet lists, not paragraphs
     - Focus on facts: vulnerabilities, locations, fixes
     - Use abbreviations: OWASP, XSS, SQLi, CSRF, JWT, etc.
     - Structure as checklists with severity ratings
     - Avoid explaining what can be inferred
     - Example format:
       ```markdown
       **Vulns:** 1.HIGH-ln45: SQL injection in user query 2.MED-ln82: missing input sanitization 3.LOW-ln120: info disclosure in errors
       **Recommendations:** 1.use parameterized queries 2.sanitize inputs 3.generic error msgs
       **Status:** Critical(0), High(1), Medium(1), Low(1)
       **Files:** src/user-service.ts:45,82,120
       ```

## Output
- SEC memories with security findings and patterns
- Comprehensive security assessment
- Security vulnerability report
- Security improvement recommendations

## Success Criteria
- SEC memories created with comprehensive security findings
- All security vulnerabilities identified and documented
- Security assessment completed
- Security improvement recommendations provided
- Security patterns stored for future reference

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories, storing SEC memories
