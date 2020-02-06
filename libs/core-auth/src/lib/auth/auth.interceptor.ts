import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {switchMap} from 'rxjs/operators';
import {of, Observable} from 'rxjs';
import {iif} from 'rxjs/internal/observable/iif';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    return of([req.url, localStorage.getItem('token')]).pipe(
      switchMap(([url, token]) =>
        iif(
          () => url.indexOf('server-30-x-30.herokuapp') > -1 && !!token,
          next.handle(
            req.clone({headers: req.headers.append('Authorization', 'Bearer ' + token)})
          ),
          next.handle(req)
        )
      )
    );
  }
}
