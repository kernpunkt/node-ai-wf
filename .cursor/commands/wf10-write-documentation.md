# Workflow Step: Write Documentation

## Purpose
Create comprehensive documentation for humans and LLMs.

## Input Required
- Story/Issue ID

## Process
1. **Gather Context**
   - Find feature files with story ID prefix
   - Search ARC memories: STORY-123, status/active
   - Search IMP memories: STORY-123, status/active

2. **Identify Files for Documentation**
   - **Identify implementation files** based on ARC memories (component-specific architecture)
   - **Identify test files** based on IMP memories (testing strategy)
   - Review all files created or modified for this story

3. **Create API Documentation**
   - Create DOC memories with component-specific API documentation
   - Tag DOC memories with story ID, status/active, topic/api
   - Document public interfaces, methods, and parameters
   - Include usage examples and return value descriptions

4. **Create Usage Examples**
   - Create DOC memories with usage examples
   - Tag DOC memories with story ID, status/active, topic/examples
   - Provide practical examples of how to use the components
   - Include common use cases and integration patterns

5. **Create Architectural Documentation**
   - Create DOC memories with architectural decisions and diagrams
   - Tag DOC memories with story ID, status/active, topic/architecture
   - Document component relationships and data flow
   - Include architectural diagrams and decision rationale

6. **Create Troubleshooting Guides**
   - Create DOC memories with troubleshooting guides
   - Tag DOC memories with story ID, status/active, topic/troubleshooting
   - Document common issues and solutions
   - Include debugging tips and error handling guidance

7. **Create Documentation Patterns**
   - Create DOC memories with documentation patterns and standards
   - Tag DOC memories with story ID, status/active, topic/patterns
   - Document documentation best practices
   - Include templates and standards for future documentation

## Output
- DOC memories with comprehensive documentation
- API documentation for all components
- Usage examples and integration patterns
- Architectural documentation and diagrams
- Troubleshooting guides and best practices

## Success Criteria
- DOC memories created with comprehensive documentation
- API documentation complete for all components
- Usage examples provided for common use cases
- Architectural documentation includes diagrams and rationale
- Troubleshooting guides cover common issues
- Documentation patterns established for future use

## MCP Tools Required
- Memory Tools: For retrieving ARC and IMP memories, storing DOC memories
