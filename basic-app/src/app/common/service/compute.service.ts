import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  //vat=value added tax , excluded_of_tax = ht , ...
  public vat(excl_tax : number, vat_pct : number ) : number{
    return excl_tax * vat_pct / 100;
    }

  constructor() { }
}
