import { Controller, Get, Query } from '@nestjs/common';
import { ApiService, TagDetails } from './api.service';
import { Observable } from 'rxjs';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('v2/tags')
  getTags(
    @Query('historianName') historianName: string,
  ): Promise<Observable<TagDetails[]>> {
    return this.apiService.getTags(historianName);
  }
}
