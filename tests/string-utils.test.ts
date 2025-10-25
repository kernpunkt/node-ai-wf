import { describe, it, expect } from 'vitest';
import { capitalize, reverse, isPalindrome, truncate, slugify } from '../src/examples/string-utils';

describe('String Utilities', () => {
    describe('capitalize', () => {
        it('should capitalize first letter and lowercase the rest', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('WORLD')).toBe('World');
            expect(capitalize('hELLo WoRLD')).toBe('Hello world');
        });

        it('should handle empty string', () => {
            expect(capitalize('')).toBe('');
        });

        it('should handle single character', () => {
            expect(capitalize('a')).toBe('A');
        });
    });

    describe('reverse', () => {
        it('should reverse a string', () => {
            expect(reverse('hello')).toBe('olleh');
            expect(reverse('world')).toBe('dlrow');
        });

        it('should handle empty string', () => {
            expect(reverse('')).toBe('');
        });

        it('should handle single character', () => {
            expect(reverse('a')).toBe('a');
        });
    });

    describe('isPalindrome', () => {
        it('should identify palindromes', () => {
            expect(isPalindrome('racecar')).toBe(true);
            expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
            expect(isPalindrome('race a car')).toBe(false);
        });

        it('should handle empty string', () => {
            expect(isPalindrome('')).toBe(true);
        });

        it('should ignore case and punctuation', () => {
            expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        });
    });

    describe('truncate', () => {
        it('should truncate long strings', () => {
            expect(truncate('Hello world', 5)).toBe('He...');
            expect(truncate('Hello world', 8)).toBe('Hello...');
        });

        it('should not truncate short strings', () => {
            expect(truncate('Hi', 5)).toBe('Hi');
        });

        it('should use custom suffix', () => {
            expect(truncate('Hello world', 5, '---')).toBe('He---');
        });
    });

    describe('slugify', () => {
        it('should create URL-friendly slugs', () => {
            expect(slugify('Hello World')).toBe('hello-world');
            expect(slugify('Hello, World!')).toBe('hello-world');
            expect(slugify('  Multiple   Spaces  ')).toBe('multiple-spaces');
        });

        it('should handle special characters', () => {
            expect(slugify('Hello@#$%World')).toBe('helloworld');
            expect(slugify('Hello---World')).toBe('hello-world');
        });

        it('should handle empty string', () => {
            expect(slugify('')).toBe('');
        });
    });
});
