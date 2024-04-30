import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { PrismaHealthIndicator } from './PrismaHealthIndicator.service';

@Controller('health')
export class HealthController {
  constructor(private health: PrismaHealthIndicator) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.isHealthy('check');
  }
}
