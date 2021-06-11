import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from 'src/controller/location.controller';
import { LocationEntity } from 'src/entity/location.entity';
import { LocationService } from 'src/service/location.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
