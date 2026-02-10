// Utility functions with proper logging
import { Logger } from './logger';

const logger = new Logger('Utils');

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  
  if (!isValid) {
    logger.warn(`Invalid email format: ${email}`);
  }
  
  return isValid;
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
