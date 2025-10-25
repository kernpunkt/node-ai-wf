/**
 * Simple logger utility using winston
 */

import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'node-basic' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

export function logInfo(message: string, meta?: Record<string, unknown>): void {
  logger.info(message, meta);
}

export function logError(
  message: string,
  error?: Error,
  meta?: Record<string, unknown>
): void {
  logger.error(message, {
    error: error?.message,
    stack: error?.stack,
    ...meta,
  });
}

export function logWarn(message: string, meta?: Record<string, unknown>): void {
  logger.warn(message, meta);
}

export function logDebug(
  message: string,
  meta?: Record<string, unknown>
): void {
  logger.debug(message, meta);
}

export { logger };
