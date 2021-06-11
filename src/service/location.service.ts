import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { LocationEntity } from 'src/entity/location.entity';
import { Location } from 'src/repository/location.interface';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>,
  ) {}

  create(location: Location): Observable<Location> {
    return from(this.locationRepository.save(location));
  }

  findOne(id: number): Observable<Location> {
    return from(this.locationRepository.findOne(id));
  }

  findAll(): Observable<Location[]> {
    return from(this.locationRepository.find());
  }

  delete(id: number): Observable<any> {
    return from(this.locationRepository.delete(id));
  }

  update(id: number, location: Location): Observable<any> {
    return from(this.locationRepository.update(id, location));
  }
}
