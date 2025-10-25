import { describe, it, expect } from 'vitest';

// Example utility functions for testing
function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function formatName(firstName: string, lastName: string): string {
    return `${firstName.trim()} ${lastName.trim()}`.trim();
}

describe('Utility Functions', () => {
    describe('add', () => {
        it('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        it('should add negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        it('should add positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        it('should multiply by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        it('should multiply negative numbers', () => {
            expect(multiply(-2, -3)).toBe(6);
        });
    });

    describe('formatName', () => {
        it('should format first and last name', () => {
            expect(formatName('John', 'Doe')).toBe('John Doe');
        });

        it('should handle empty strings', () => {
            expect(formatName('', 'Doe')).toBe('Doe');
            expect(formatName('John', '')).toBe('John');
        });

        it('should trim whitespace', () => {
            expect(formatName('  John  ', '  Doe  ')).toBe('John Doe');
        });
    });
});
