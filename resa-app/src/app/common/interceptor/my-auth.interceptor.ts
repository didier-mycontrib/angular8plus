import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
  :Observable<HttpEvent<unknown>> {
    //récupération du jeton:             
    let access_token = sessionStorage.getItem('access_token');

    if(access_token){
      //ajout du jeton dans le champ Authorization 
      //de l'entête de la requête HTTP enrichie
      //selon les spécifications "Bearer token" du protocole HTTP :
      const authReq = request.clone({headers: 
            request.headers.set('Authorization', 'Bearer ' + access_token)}
            );
      return next.handle(authReq);
    }
    else return next.handle(request);
    }
}
