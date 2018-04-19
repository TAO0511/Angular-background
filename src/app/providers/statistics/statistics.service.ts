import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {RouteMap} from '../../models/route-map/route-map.modle';

@Injectable()
export class StatisticsService {

  constructor(private httpService: HttpService) {
  }

  recalculate(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.STATISTICS.RECALCULATE, params);
  }

}
