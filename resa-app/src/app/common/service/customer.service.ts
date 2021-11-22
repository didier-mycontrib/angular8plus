import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../data/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //private _apiBaseUrl ="http://localhost:8231/customer-api"; 
  private _apiBaseUrl ="/customer-api"; //with ng serve --proxy-config proxy.conf.json
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private _http : HttpClient){}

  public getCustomerById$(idCustomer:string) : Observable<Customer>{
    let url = this._apiBaseUrl + "/customer/"+idCustomer ;
    console.log( "url = " + url);
    return this._http.get<Customer>(url);
  }

  public getCustomerByUsername$(username:string) : Observable<Customer[]>{
    let url = this._apiBaseUrl + "/customer?username="+username ;
    console.log( "url = " + url);
    return this._http.get<Customer[]>(url);
  }

  public postNewCustomer$(customer: Customer): Observable<Customer>{
    let url = this._apiBaseUrl +"/public-customer";
    return this._http.post<Customer>(url,customer, {headers: this._headers} )
  }
}
