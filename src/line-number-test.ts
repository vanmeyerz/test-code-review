import { Controller, Get, Post, Body } from '@nestjs/common';

/**
 * Test file to verify GitHub line number fix
 * This file has violations at specific line numbers
 */

@Controller('test')
export class LineNumberTestController {
  // Violation 1: Business logic in controller (line 12-20)
  @Get('calculate')
  async calculateTotal(@Body() data: any) {
    console.log('Calculating...'); // Also violates NO_CONSOLE_LOG

    // Business logic that should be in service
    const total = data.items.reduce((sum: number, item: any) => {
      return sum + (item.price * item.quantity);
    }, 0);

    return { total };
  }

  // Violation 2: Missing error handling (line 24-28)
  @Post('process')
  async processData(@Body() input: any) {
    const result = await this.heavyComputation(input);
    return result;
  }

  // Violation 3: Complex function (line 31-55)
  @Get('complex')
  async complexFunction(@Body() params: any) {
    let result: any;

    if (params.type === 'A') {
      if (params.subType === '1') {
        result = this.processTypeA1(params);
      } else if (params.subType === '2') {
        result = this.processTypeA2(params);
      } else {
        result = this.processTypeA3(params);
      }
    } else if (params.type === 'B') {
      if (params.subType === '1') {
        result = this.processTypeB1(params);
      } else if (params.subType === '2') {
        result = this.processTypeB2(params);
      } else {
        result = this.processTypeB3(params);
      }
    } else {
      result = this.processDefault(params);
    }

    return result;
  }

  private async heavyComputation(data: any) {
    return data;
  }

  private processTypeA1(p: any) { return 'A1'; }
  private processTypeA2(p: any) { return 'A2'; }
  private processTypeA3(p: any) { return 'A3'; }
  private processTypeB1(p: any) { return 'B1'; }
  private processTypeB2(p: any) { return 'B2'; }
  private processTypeB3(p: any) { return 'B3'; }
  private processDefault(p: any) { return 'default'; }
}
