import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/entity/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistanceService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>,
  ) {}

  getDistance() {
    return 'Logic yet to be implemented';
  }
}
