# Workflow Step: Review Implementation

## Purpose
Comprehensive code review and quality assessment.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: story_id:STORY-123, status:active
   - Search IMP memories: story_id:STORY-123, status:active

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
   - Create DOC memories with review findings and patterns
   - Tag DOC memories with story ID, status:active, topic:review
   - Document specific issues and recommendations

## Output
- DOC memories with review findings
- Comprehensive quality assessment
- Improvement recommendations
- Security assessment results


## Success Criteria
- DOC memory created with comprehensive review findings
- All code quality issues identified and documented
- Test quality assessed and documented
- Architecture compliance validated
- Improvement recommendations provided

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories, storing DOC memories
