import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

describe('Node.js File Operations', () => {
    let tempFile: string;

    beforeEach(() => {
        // Create a temporary file for testing
        tempFile = join(tmpdir(), `test-${Date.now()}.txt`);
    });

    afterEach(() => {
        // Clean up temporary file
        try {
            unlinkSync(tempFile);
        } catch (error) {
            // File might not exist, ignore error
        }
    });

    it('should write and read files', () => {
        const testContent = 'Hello, Node.js!';
        
        // Write to file
        writeFileSync(tempFile, testContent, 'utf8');
        
        // Read from file
        const content = readFileSync(tempFile, 'utf8');
        
        expect(content).toBe(testContent);
    });

    it('should handle file operations with different encodings', () => {
        const testContent = 'Test with special chars: äöüß';
        
        writeFileSync(tempFile, testContent, 'utf8');
        const content = readFileSync(tempFile, 'utf8');
        
        expect(content).toBe(testContent);
    });
});

describe('Node.js Process Operations', () => {
    it('should have access to process environment', () => {
        expect(process.env.NODE_ENV).toBeDefined();
        expect(typeof process.env.NODE_ENV).toBe('string');
    });

    it('should have access to process arguments', () => {
        expect(Array.isArray(process.argv)).toBe(true);
        expect(process.argv.length).toBeGreaterThan(0);
    });

    it('should have access to current working directory', () => {
        expect(process.cwd()).toBeDefined();
        expect(typeof process.cwd()).toBe('string');
    });
});
