import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request) {
    return {
      host: request.get('host') || '',
      xHost: request.get('X-Forwarded-Host') || '',
      ip: request.get('ip') || '',
      xIp: request.get('X-Forwarded-For') || '',
      rIp: request?.socket?.remoteAddress,
    };
  }
}
