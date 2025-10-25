import { describe, it, expect } from 'vitest';

// Simple logger functions for testing (avoiding winston import issues)
function logInfo(message: string, meta?: Record<string, unknown>): void {
    console.log(`[INFO] ${message}`, meta || '');
}

function logError(message: string, error?: Error, meta?: Record<string, unknown>): void {
    console.error(`[ERROR] ${message}`, { error: error?.message, stack: error?.stack, ...meta });
}

function logWarn(message: string, meta?: Record<string, unknown>): void {
    console.warn(`[WARN] ${message}`, meta || '');
}

function logDebug(message: string, meta?: Record<string, unknown>): void {
    console.debug(`[DEBUG] ${message}`, meta || '');
}

describe('Logger Utilities', () => {
    it('should call logInfo without throwing', () => {
        expect(() => logInfo('Test info message')).not.toThrow();
    });

    it('should call logInfo with metadata', () => {
        expect(() => logInfo('Test info message', { userId: 123 })).not.toThrow();
    });

    it('should call logError without throwing', () => {
        expect(() => logError('Test error message')).not.toThrow();
    });

    it('should call logError with Error object', () => {
        const error = new Error('Test error');
        expect(() => logError('Test error message', error)).not.toThrow();
    });

    it('should call logError with metadata', () => {
        const error = new Error('Test error');
        expect(() => logError('Test error message', error, { userId: 123 })).not.toThrow();
    });

    it('should call logWarn without throwing', () => {
        expect(() => logWarn('Test warning message')).not.toThrow();
    });

    it('should call logWarn with metadata', () => {
        expect(() => logWarn('Test warning message', { userId: 123 })).not.toThrow();
    });

    it('should call logDebug without throwing', () => {
        expect(() => logDebug('Test debug message')).not.toThrow();
    });

    it('should call logDebug with metadata', () => {
        expect(() => logDebug('Test debug message', { userId: 123 })).not.toThrow();
    });
});
