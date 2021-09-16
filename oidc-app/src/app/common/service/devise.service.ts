import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


export interface ConvertResult {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

 //private _apiBaseUrl ="http://localhost:8585/serverRest/devise-api"; 

 private _apiBaseUrl ="./devise-api"; 
 // with prefix in proxy.conf.json 
 // (ng serve --proxy-config proxy.conf.json)
 // or other config in production mode

  constructor(private _http : HttpClient){}

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  public getAllDevises$() : Observable<Devise[]>{
    let url = this._apiBaseUrl + "/public/devise" ;
    console.log("url = " + url);
    return this._http.get<Devise[]>(url);
  }

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {

      const params = new HttpParams()
                      .set('amount', montant.toString())
                      .set('source', codeDeviseSrc)
                      .set('target', codeDeviseTarget);
      let url = this._apiBaseUrl 
             + `/public/convert?${params.toString()}`;
      //console.log("url = " + url);
      return this._http.get<ConvertResult>(url)
            .pipe(
              map( (res:ConvertResult) => res.result)
            );
  }

  public deleteDeviseServerSide$(deviseCode:string):Observable<any>{
    let url = this._apiBaseUrl + "/private/role_admin/devise/" + deviseCode ;
    console.log("deleteUrl=" + url );
    return this._http.delete(url);
  }

  public postDevise$(devise: Devise): Observable<Devise>{
    let url = this._apiBaseUrl +"/private/role_admin/devise/";
    return this._http.post<Devise>(url,devise, {headers: this._headers} );
 }
}