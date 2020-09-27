import { Injectable } from '@angular/core';

@Injectable({
  providedIn  : 'root'
})
export class ForMyLazyService {
  public compteur : number = 0;

  constructor() { }
}
