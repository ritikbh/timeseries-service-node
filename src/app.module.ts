import { Module } from '@nestjs/common';
import { ApiController } from './app.controller';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // importing axios
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
