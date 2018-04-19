/**
 * Created by Galois Zhou on 20/12/2017 15:15.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {RouteJson, RouteMap} from '../../models/route-map/route-map.modle';

import {Subject} from 'rxjs/Rx';

@Injectable()
export class HttpService {

  private isLoading: boolean = false;
  private authSubject: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
  }

  openLoading() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    // TODO add loading...

    setTimeout(() => {
      this.closeLoading();
    }, 30000);
  }

  closeLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      // TODO close loading...
    }
  }

  request(routeJson: RouteJson, params: any = {}, isLoading: boolean = false): Promise<any> {
    let method = routeJson.method;
    let requestUrl = routeJson.url;
    let observable: Observable<Object>;

    if (isLoading) {
      this.openLoading();
    }

    switch (method) {
      case RouteMap.METHODS.GET:
        observable = this.http.get(requestUrl, {params: params});
        break;
      case RouteMap.METHODS.POST:
        observable = this.http.post(requestUrl, JSON.stringify(params));
        break;
      case RouteMap.METHODS.PUT:
        observable = this.http.put(requestUrl, JSON.stringify(params));
        break;
      case RouteMap.METHODS.DELETE:
        observable = this.http.request(RouteMap.METHODS.DELETE, requestUrl, {params: params});
        break;
      // default:
      //   ;
    }

    return new Promise((resolve, reject) => {
      if (observable) {
        observable.subscribe(
          data => {
            resolve(data);
            if (isLoading) {
              this.closeLoading();
            }
          },
          error => {

            if (isLoading) {
              this.closeLoading();
            }

            if (error && error.status == 401) {
              // 如果是401
              this.gotoLogin();
              resolve({success: false, message: error.error || '请先登录!'});
            } else {
              reject(error);
            }
          });
      } else {
        reject('未知请求方法');
      }
    });

  }

  gotoLogin() {
    localStorage.removeItem('access_token');
    this.sendAuthMessage(false);
  }

  sendAuthMessage(message: boolean) {
    this.authSubject.next(message);
  }

  getAuthMessage(): Observable<boolean> {
    return this.authSubject.asObservable();
  }
}
