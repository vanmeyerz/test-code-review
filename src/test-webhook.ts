// Test file to trigger webhook
export class TestWebhook {
  async processData(data: any) {
    console.log('Processing data:', data); // NO_CONSOLE_LOG violation

    // No error handling - MISSING_ERROR_HANDLING
    const result = await this.fetchData(data.id);

    // Business logic in what looks like a handler
    if (result.status === 'active') {
      console.log('Active user detected'); // NO_CONSOLE_LOG
      return result;
    }

    return null;
  }

  private async fetchData(id: string) {
    return { id, status: 'active' };
  }
}
