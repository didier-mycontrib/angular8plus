import { Injectable } from '@angular/core';
import { Country, Continent, Region } from '../data/country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  public getCountries():Observable<Country[]>{
      return of(this._countries);
  }

  public getContinents():Observable<Continent[]>{
    return of(this._continents);
}

private _IleDeFrance =  new Region(1,"Ile de France");
private _normandie =  new Region(2,"Normandie");
private _Bretagne =  new Region(3,"Bretagne");

private _france = new Country('fr','France','Paris',67795000,632734 ,
  [ this._IleDeFrance , this._normandie , this._Bretagne]);

private _espagne = new Country('es','Espagne','Madrid',46934632,505911);
private _allemagne = new Country('de','Allemagne','Berlin',83073100,357386);
private _italie = new Country('it','Italie','Rome',60359546,301336);
private _royaumeUni = new Country('en','Royaume-Uni','Londres',65761117,246690);

private _canada = new Country('ca','Canada','Montreal',0,0);
private _usa = new Country('us','USA','Washingtown',0,0);
private _mexique = new Country('mx','Mexique','Mexico',0,0);
private _bresil = new Country('br','Bresil','Brasilia',0,0);
private _argentine = new Country('ar','Argentine','Buenos Aires',0,0);

private _afrique = new Continent(1,"afrique");
private _asie = new Continent(2,"asie");
private _europe = new Continent(3,"europe" , [ this._france , this._allemagne , 
        this._espagne , this._italie , this._royaumeUni]);
private _amerique = new Continent(4,"amerique",[ this._usa , this._canada , 
  this._bresil , this._mexique , this._argentine]);
private _oceanie = new Continent(5,"oceanie");


private _continents : Continent[]=[
  this._afrique , this._asie , this._europe ,
  this._amerique , this._oceanie
];

  private _countries : Country[]=[
    this._france , this._allemagne , this._espagne , this._italie ,
    this._royaumeUni
  ];
}
