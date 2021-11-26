import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../data/session';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  //private _apiBaseUrl ="http://localhost:8230/session-api"; 
  //private _apiBaseUrl ="/session-api"; is better than "./session-api"; in prod with <base href=".">
  private _apiBaseUrl ="/session-api"; //with ng serve --proxy-config proxy.conf.json

  constructor(private _http : HttpClient,
              private _cacheService : CacheService){}

  public getAllSessions$() : Observable<Session[]>{

    /*
    // double encodage string en urlEncoded puis en base64 du coté angular:
    let chaineComplexeAvecCaracteresGenants="abc é è ù # $ à / & < > ; + ...";
    let urlEncodedString = encodeURIComponent(chaineComplexeAvecCaracteresGenants)
    console.log("urlEncodedString="+urlEncodedString);
    var sEnBase64 = window.btoa(urlEncodedString);
    console.log("sEnBase64="+sEnBase64);

    // double decodage base64 en urlEncoded  puis string du coté angular:
    var urlEncodedStr = window.atob(sEnBase64);
    console.log("urlEncodedStr="+urlEncodedStr);
    var str = decodeURIComponent(urlEncodedStr);
    console.log("str="+str);
    let url = this._apiBaseUrl + "/public/session" + "?p="+sEnBase64;
*/
    let url = this._apiBaseUrl + "/public/session" ;
    console.log( "url = " + url);
    return this._http.get<Session[]>(url)
    .pipe(
      tap( (sessions)=> sessions.forEach(s=>this._cacheService.storeSessionInCache(s)))
    );
  }
}
