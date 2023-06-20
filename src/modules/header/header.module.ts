import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';

@Module({
  imports: [],
  controllers: [HeaderController],
})
export class HeaderModule {}
