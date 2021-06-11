import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DistanceService } from 'src/service/distance.service';

@ApiTags('distnace')
@Controller('distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @ApiResponse({
    description:
      'The endpoint logic is to receive an array of ids then pass to the distance service to get the calculation of the distance between the locations.',
  })
  @Get()
  async getDistance() {
    return { distance: this.distanceService.getDistance() };
  }
}
