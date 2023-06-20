import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('header')
export class HeaderController {
  @Get()
  getHello(@Req() request: Request) {
    return {
      host: request.get('host') || '',
      'X-Forwarded-Host': request.get('X-Forwarded-Host') || '',
      ip: request.get('ip') || '',
      'X-Forwarded-For': request.get('X-Forwarded-For') || '',
      'request?.socket?.remoteAddress': request?.socket?.remoteAddress,
    };
  }
}
