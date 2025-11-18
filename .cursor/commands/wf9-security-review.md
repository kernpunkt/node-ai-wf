# Workflow Step: Security Review

## Purpose
Comprehensive security assessment.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context and Threat Model Foundation**
   - Find feature files with story ID prefix
   - **Search TMO memories: STORY-123, status/active** (story-specific threat model)
   - **Search TMO memories: status/active** (project-level threat model if no story-specific exists)
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active
   - **Extract threat model context:** Assets to protect, potential attackers, attack vectors, threat scenarios, security boundaries, and mitigation strategies from TMO memories

2. **Identify Files for Security Review**
   - **Identify implementation files** based on ARC memories (component-specific architecture) and IMP memories
   - Review all files created or modified for this story
   - **Focus on security-sensitive components and interfaces** identified in the threat model
   - **Prioritize review areas** based on threat model assets and attack vectors

3. **Security Vulnerability Assessment (Threat Model-Based)**
   - **Validate against threat model:** Check implementation against documented threat scenarios from TMO memories
   - **Focus on documented attack vectors:** Review code for vulnerabilities matching threat model attack vectors
   - Identify potential security vulnerabilities
   - Check for common security issues (OWASP Top 10) - prioritize those identified in threat model
   - Review code for security anti-patterns
   - **Analyze attack vectors from threat model:** Validate that documented attack vectors are properly mitigated

4. **Input Validation Review (Threat Model Alignment)**
   - **Validate against threat model input boundary:** Check that input validation aligns with documented security boundaries
   - Check input validation and sanitization
   - Review data validation patterns
   - **Check for injection vulnerabilities** identified in threat model (SQL injection, NoSQL injection, XSS, command injection)
   - Validate error handling and information disclosure
   - **Verify mitigation strategies:** Ensure input validation controls match threat model mitigation strategies

5. **Authentication and Authorization Check (Threat Model Alignment)**
   - **Validate against threat model authentication/authorization boundaries:** Check that controls align with documented boundaries
   - Review authentication mechanisms
   - Check authorization patterns and access controls
   - Validate session management
   - Review password handling and storage
   - **Verify against threat model:** Ensure authentication/authorization threats from threat model are properly mitigated

6. **Data Protection Validation (Threat Model Alignment)**
   - **Validate against threat model data boundary:** Check that data protection aligns with documented security boundaries
   - **Protect assets identified in threat model:** Ensure all documented assets are properly protected
   - Check data encryption and protection
   - Review sensitive data handling
   - Validate data transmission security
   - Check for data leakage vulnerabilities
   - **Verify mitigation strategies:** Ensure encryption and data protection controls match threat model mitigation strategies

7. **Security Best Practices Audit (Threat Model Validation)**
   - **Validate security boundaries:** Ensure all documented security boundaries have appropriate controls
   - Review security coding practices
   - Check for security configuration issues
   - Validate security logging and monitoring
   - Review security testing coverage
   - **Verify threat model coverage:** Ensure all documented threats have corresponding security controls implemented

8. **Document Security Findings (Threat Model Reference)**
   - Create SEC memories with security findings and patterns
   - Tag SEC memories with story ID and status/active
   - **Reference threat model:** Link SEC memories to relevant TMO memories using `mcp_memory-tools_link_mem`
   - **Document threat model validation:** Note which threats from the threat model were validated and which need attention
   - Document specific security issues and recommendations
   - **Document gaps:** Identify any threats from threat model that lack proper mitigation
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
- Memory Tools: For retrieving TMO, ARC, and IMP memories, storing SEC memories, and linking SEC memories to TMO memories
