import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerAccount, ResLogin } from '../data/customer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //private _apiBaseUrl ="http://localhost:8231/customer-api"; 
  private _apiBaseUrl ="./customer-api"; //with ng serve --proxy-config proxy.conf.json
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http : HttpClient){}

  public postNewAccount$(customerAccount: CustomerAccount): Observable<CustomerAccount>{
    let url = this._apiBaseUrl +"/public-account";
    return this._http.post<CustomerAccount>(url,customerAccount, {headers: this._headers} )
  }

  public postLogin$(customerAccount: CustomerAccount): Observable<ResLogin>{
    let url = this._apiBaseUrl +"/public-login";
    return this._http.post<ResLogin>(url,customerAccount, {headers: this._headers} )
  }

  

  
}
