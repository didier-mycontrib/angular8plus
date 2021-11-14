import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../data/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  //private _apiBaseUrl ="http://localhost:8230/session-api"; 
  private _apiBaseUrl ="./session-api"; //with ng serve --proxy-config proxy.conf.json

  constructor(private _http : HttpClient){}

  public getAllSessions$() : Observable<Session[]>{
    let url = this._apiBaseUrl + "/public/session" ;
    console.log( "url = " + url);
    return this._http.get<Session[]>(url);
  }
}
