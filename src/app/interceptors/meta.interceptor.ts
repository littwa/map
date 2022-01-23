import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class MetaInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      // setHeaders: {
      //   key: 'SoL71Zyf7SmLrVYWC7fQ'
      // },
      setParams: {
        key: environment.mapTiler.apiKey
      }
    });

    return next.handle(request);
  }
}
