# Workflow Step: Review Implementation

## Purpose
Comprehensive code review and quality assessment.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active

2. **Identify Files for Review**
   - **Identify implementation files** based on ARC memories (component-specific architecture)
   - **Identify test files** based on IMP memories (testing strategy)
   - Review all files created or modified for this story

3. **Code Quality Review**
   - Review code quality and standards compliance
   - Check adherence to clean code principles
   - Validate code organization and structure
   - Review naming conventions and documentation

4. **Test Quality Assessment**
   - Check test coverage and quality
   - Review test organization and structure
   - Validate test completeness and effectiveness
   - Check test maintainability and clarity

5. **Architecture Compliance**
   - Validate against architecture decisions
   - Check component boundaries and interfaces
   - Review integration points and data flow
   - Validate architectural patterns and constraints

6. **Identify Improvements**
   - Identify potential improvements and optimizations
   - Check for code duplication and refactoring opportunities
   - Identify areas for better error handling

7. **Security Review (Basic)**
   - Basic security vulnerability assessment
   - Check for common security issues
   - Review input validation and sanitization
   - Check authentication and authorization patterns

8. **Document Review Findings**
   - Create CRV memories with review findings and patterns
   - Tag CRV memories with story ID, status/active, topic/review
   - Document specific issues and recommendations
   - **⚠️ CRITICAL: Optimize for token efficiency**
     - Use bullet lists, not paragraphs
     - Focus on facts: issues, locations, recommendations
     - Use abbreviations: TODO, FIXME, API, CRUD, etc.
     - Structure as checklists with file:line references
     - Avoid explaining what can be inferred
     - Example format:
       ```markdown
       **Issues:** 1.ln45: missing null check 2.ln82: duplicate logic 3.ln120: no error handling
       **Recommendations:** 1.extract validator 2.use try/catch 3.add type guards
       **Quality:** CleanCode(8/10), Tests(9/10), Arch(10/10)
       **Files:** src/user-service.ts, tests/user-service.test.ts
       ```

## Output
- CRV memories with review findings
- Comprehensive quality assessment
- Improvement recommendations
- Security assessment results


## Success Criteria
- CRV memory created with comprehensive review findings
- All code quality issues identified and documented
- Test quality assessed and documented
- Architecture compliance validated
- Improvement recommendations provided

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories, storing CRV memories
