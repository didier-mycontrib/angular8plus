import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public cpt : number = 0 ;

  constructor() { }
}
