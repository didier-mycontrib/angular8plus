import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/* user session in this angular frontEnd App */

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private _bsSelectedSessionId$ = new BehaviorSubject<string>("none");
  private _bsCustomerId$ = new BehaviorSubject<string|null>(null);

  public get bsSelectedSessionId$() : BehaviorSubject<string>{ 
    return this._bsSelectedSessionId$ 
  }

  public setSelectedSessionId(selectedSessionId:string){
    this._bsSelectedSessionId$.next(selectedSessionId);
  }

  public get bsCustomerId$() : BehaviorSubject<string|null>{ 
    return this._bsCustomerId$ 
  }

  public setCustomerId(customerId:string|null){
    this._bsCustomerId$.next(customerId);
  }

  constructor() { }
}
