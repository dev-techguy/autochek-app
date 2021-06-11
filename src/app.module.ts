import { Module } from '@nestjs/common';
import { LocationModule } from './module/location.module';

@Module({
  imports: [LocationModule],
})
export class AppModule {}
