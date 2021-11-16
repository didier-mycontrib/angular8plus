import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../data/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
//private _apiBaseUrl ="http://localhost:8232/reservation-api"; 
private _apiBaseUrl ="/reservation-api"; //with ng serve --proxy-config proxy.conf.json

constructor(private _http : HttpClient){}

public getReservationById$(idResa:string) : Observable<Reservation>{
  let url = this._apiBaseUrl + "/reservation/"+idResa ;
  console.log( "url = " + url);
  return this._http.get<Reservation>(url);
}

}
