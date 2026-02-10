// Proper logging utility instead of console.log
export class Logger {
  constructor(private context: string) {}

  info(message: string): void {
    this.log('INFO', message);
  }

  warn(message: string): void {
    this.log('WARN', message);
  }

  error(message: string, error?: Error): void {
    this.log('ERROR', message);
    if (error) {
      this.log('ERROR', error.stack || error.message);
    }
  }

  private log(level: string, message: string): void {
    const timestamp = new Date().toISOString();
    // In production, this would go to a proper logging service
    console.log(`[${timestamp}] [${level}] [${this.context}] ${message}`);
  }
}
