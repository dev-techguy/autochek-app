import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistanceController } from 'src/controller/distance.controller';
import { LocationController } from 'src/controller/location.controller';
import { LocationEntity } from 'src/entity/location.entity';
import { DistanceService } from 'src/service/distance.service';
import { LocationService } from 'src/service/location.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  providers: [LocationService, DistanceService],
  controllers: [LocationController, DistanceController],
})
export class LocationModule {}
