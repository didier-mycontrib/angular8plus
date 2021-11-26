import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomerAccount, ResLogin } from '../data/customer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //private _apiBaseUrl ="http://localhost:8231/customer-api"; 
  private _apiBaseUrl ="/customer-api"; //with ng serve --proxy-config proxy.conf.json
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http : HttpClient){}

  public postNewAccount$(customerAccount: CustomerAccount): Observable<CustomerAccount>{
    let url = this._apiBaseUrl +"/public/account";
    return this._http.post<CustomerAccount>(url,customerAccount, {headers: this._headers} )
  }

  public postLogin$(customerAccount: CustomerAccount): Observable<ResLogin>{
    let url = this._apiBaseUrl +"/public/login";
    return this._http.post<ResLogin>(url,customerAccount, {headers: this._headers} )
               .pipe(
                    tap( (resLogin) => this.storeAcessToken(resLogin) )
               );
  }

  private storeAcessToken(resLogin:ResLogin){
       console.log("resLogin="+JSON.stringify(resLogin))
       if(resLogin.token){
         let token : any = resLogin.token;
        // a peaufiner (ici pour structure coincidant avec plugin oauth2 de kong)
         let access_token : string = <string> token["access_token"];
         if(access_token) sessionStorage.setItem("access_token",access_token);
       }
  }  

  
}
