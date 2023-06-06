import { HttpService } from '@nestjs/axios';
import {
  InternalServerErrorException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { map, catchError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}

  async getTags(historianName: string) {
    if (historianName) { // Checking if valid query parameter was received
      return this.http
        .get(
          `https://tm-connector-ds-poc.azure-api.net/api/v2/tags/?historianName=${historianName}`,
        )
        .pipe(
          map((res) => {
            let result = [];
            if (historianName === 'all') { 
              result = res.data // Returns all data
            } else {
              result = res.data.filter((obj: TagDetails) => { // Filters array based on query parameter
                return obj.Name === historianName
              });
            }
            return result;
          }),
        )
        .pipe(
          catchError(() => {
            throw new InternalServerErrorException('Server Error');
          }),
        );
    } else {
      throw new BadRequestException('Invalid query parameter');
    }
  }
}

export interface TagDetails {
  Name: string;
  Description: string;
  Units: string;
  Type: string;
}
