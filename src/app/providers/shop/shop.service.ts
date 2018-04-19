import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {RouteMap} from '../../models/route-map/route-map.modle';

@Injectable()
export class ShopService {

  constructor(private httpService: HttpService) {
  }

  search(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.SHOP.SEARCH, params);
  }

  update(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.SHOP.UPDATE, params);
  }

  delete(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.SHOP.DELETE, params);
  }

  get(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.SHOP.GET, params);
  }
  
}
