import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, power, factorial } from '../src/examples/math';

describe('Math Utilities', () => {
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

    describe('subtract', () => {
        it('should subtract two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        it('should handle negative results', () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        it('should multiply by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        it('should multiply negative numbers', () => {
            expect(multiply(-2, -3)).toBe(6);
        });
    });

    describe('divide', () => {
        it('should divide two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        it('should handle decimal results', () => {
            expect(divide(7, 2)).toBe(3.5);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
        });
    });

    describe('power', () => {
        it('should calculate power correctly', () => {
            expect(power(2, 3)).toBe(8);
            expect(power(5, 2)).toBe(25);
        });

        it('should handle zero exponent', () => {
            expect(power(5, 0)).toBe(1);
        });
    });

    describe('factorial', () => {
        it('should calculate factorial correctly', () => {
            expect(factorial(0)).toBe(1);
            expect(factorial(1)).toBe(1);
            expect(factorial(5)).toBe(120);
            expect(factorial(4)).toBe(24);
        });

        it('should throw error for negative numbers', () => {
            expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
        });
    });
});
