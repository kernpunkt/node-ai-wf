import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
    it('should pass basic math operations', () => {
        expect(2 + 2).toBe(4);
        expect(10 - 5).toBe(5);
        expect(3 * 4).toBe(12);
        expect(8 / 2).toBe(4);
    });

    it('should handle string operations', () => {
        const greeting = 'Hello, World!';
        expect(greeting).toContain('World');
        expect(greeting.length).toBeGreaterThan(0);
    });

    it('should work with arrays', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(numbers).toHaveLength(5);
        expect(numbers).toContain(3);
        expect(numbers[0]).toBe(1);
    });
});
