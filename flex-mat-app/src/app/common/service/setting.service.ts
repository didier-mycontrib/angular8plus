import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public mat_appearences = [ "legacy" , "standard" , "fill" , "outline"];
  public my_mat_appearence:string = this.mat_appearences[1];

  constructor() { }
}
