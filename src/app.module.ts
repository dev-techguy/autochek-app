import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './module/location.module';

@Module({
  imports: [TypeOrmModule.forRoot({ name: 'default' }), LocationModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
