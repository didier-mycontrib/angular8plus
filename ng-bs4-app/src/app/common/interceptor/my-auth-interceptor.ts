import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest }from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthInterceptor implements HttpInterceptor {

intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = sessionStorage.getItem('authToken');
        const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
        return next.handle(authReq);
      }
      
}