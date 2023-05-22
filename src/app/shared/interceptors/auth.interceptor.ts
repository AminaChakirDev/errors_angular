import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    console.log(request.url);

    if (request.url === 'https://api.cloudinary.com/v1_1/doniaq0ov/image/upload') {
      return next.handle(request);
    }

    const newHeaders = new HttpHeaders().append(
      'Authorization',
      `Bearer token`
    );

    const modifiedReq = request.clone({ headers: newHeaders });

    return next.handle(modifiedReq);
  }
}
