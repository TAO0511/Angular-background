import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {RouteMap} from '../../models/route-map/route-map.modle';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {

  }


  // TODO delete
  test(): Promise<any> {
    return this.httpService.request(RouteMap.V1.COMMON.TOKEN);
  }

  navBuild(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = [
        {
          children: [
            {
              componentName: "UserComponent",
              icon: "",
              id: "122",
              index: 1,
              name: "模板",
              url: "/template"
            },
            {
              componentName: "ShopComponent",
              icon: "",
              id: "124",
              index: 2,
              name: "商家管理",
              url: "/shop"
            },
            {
              componentName: "ShopStatisticsComponent",
              icon: "",
              id: "125",
              index: 3,
              name: "平台指数",
              url: "/shopStatistics"
            },
          ],
          componentName: "Charge",
          icon: "lnr-home",
          id: "1",
          index: 1,
          name: "控制台",
          url: ""
        },
        {
          children: [
            // {
            //   componentName: "UserComponent",
            //   icon: "",
            //   id: "121",
            //   index: 1,
            //   name: "用户",
            //   url: "/user"
            // },
            {
              componentName: "UserComponent",
              icon: "",
              id: "122",
              index: 2,
              name: "主页",
              url: "/dashboard"
            },

          ],
          componentName: "Charge",
          icon: "lnr-menu-circle",
          id: "2",
          index: 2,
          name: "菜单",
          url: ""
        }
      ]
      resolve(data);
    });
  }

  signIn(params: any): Promise<any> {
    return this.httpService.request(RouteMap.V1.USER.SIGN_IN, params);
  }

  signOut(): Promise<any> {
    return this.httpService.request(RouteMap.V1.USER.SIGN_OUT);
  }
}
