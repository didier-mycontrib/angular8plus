import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../data/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
//private _apiBaseUrl ="http://localhost:8232/reservation-api"; 
private _apiBaseUrl ="/reservation-api"; //with ng serve --proxy-config proxy.conf.json
private _headers = new HttpHeaders({'Content-Type': 'application/json'});

constructor(private _http : HttpClient){}

public getReservationById$(idResa:string) : Observable<Reservation>{
  let url = this._apiBaseUrl + "/private/reservation/"+idResa ;
  console.log( "url = " + url);
  return this._http.get<Reservation>(url);
}

public getReservationsByCustomerId$(customerId:string) : Observable<Reservation[]>{
  let url = this._apiBaseUrl + "/private/reservation?customerId"+customerId ;
  console.log( "url = " + url);
  return this._http.get<Reservation[]>(url);
}

public postNewReservation$(reservation: Reservation): Observable<Reservation>{
  let url = this._apiBaseUrl +"/private/reservation";
  return this._http.post<Reservation>(url,reservation, {headers: this._headers} )
}

}
