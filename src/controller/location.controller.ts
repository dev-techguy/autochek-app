import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { LocationEntity } from 'src/entity/location.entity';
import { Location } from 'src/repository/location.interface';
import { LocationService } from 'src/service/location.service';

@ApiTags()
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @ApiBody({
    type: [LocationEntity],
    description: 'Create a new location that does not exists yet.',
  })
  @Post()
  create(@Body() location: Location): Observable<Location> {
    return this.locationService.create(location);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<Location> {
    return this.locationService.findOne(id);
  }

  @ApiResponse({
    type: [LocationEntity],
    description: 'Fetches all the locations.',
  })
  @Get()
  findAll(): Observable<Location[]> {
    return this.locationService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number): Observable<any> {
    return this.locationService.delete(id);
  }

  @ApiBody({
    type: [LocationEntity],
    description: 'Update either the name, description of the location.',
  })
  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() location: Location,
  ): Observable<any> {
    return this.locationService.update(id, location);
  }
}
