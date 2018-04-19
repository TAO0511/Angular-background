/**
 * Created by Galois Zhou on 20/12/2017 15:15.
 */

import {Injectable} from '@angular/core';

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor() {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');
    const headerKeys = req.headers.keys();
    let headers = {
      'Content-Type': 'application/json',
    };
    if (accessToken) {
      headers['X-CSRF-Token'] = accessToken;
    }
    for (let i = 0; i < headerKeys.length; i++) {
      headers[headerKeys[i]] = req.headers.get(headerKeys[i]);
    }
    return next
      .handle(req.clone({setHeaders: headers}))
      .do(event => {

        },
        error => {

        }
      );
  }

}
