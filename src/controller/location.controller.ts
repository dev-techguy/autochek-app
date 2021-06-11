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
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Location } from 'src/repository/location.interface';
import { LocationService } from 'src/service/location.service';

@ApiTags()
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() location: Location): Observable<Location> {
    return this.locationService.create(location);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<Location> {
    return this.locationService.findOne(id);
  }

  @Get()
  findAll(): Observable<Location[]> {
    return this.locationService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number): Observable<any> {
    return this.locationService.delete(id);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() location: Location,
  ): Observable<any> {
    return this.locationService.update(id, location);
  }
}
