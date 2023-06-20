import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeaderModule } from './modules/header/header.module';

@Module({
  imports: [HeaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
