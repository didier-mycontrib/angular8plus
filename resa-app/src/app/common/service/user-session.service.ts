import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/* user session in this angular frontEnd App */

class GenericUserSessionService{
    storeSessionKeyValue(key:string,value: unknown):void{
         let sValue : string ="null";
         if(typeof value == 'string') sValue = value;
         else sValue=JSON.stringify(value);
         sessionStorage.setItem(key,sValue);
    }

    retreiveSessionValue(key:string,defaultValue: any):any{
      let res :any = null;
      let sValue : string  | null = sessionStorage.getItem(key);
      if(sValue != null && sValue != "null" && sValue != "") {
        try {
          res=JSON.parse(sValue);
        }catch(ex){
          res=sValue;
        }
      }
      if(res==null){
        res=defaultValue;
      }
      return res;
 }
}

@Injectable({
  providedIn: 'root'
})
export class UserSessionService extends GenericUserSessionService {

  private _bsSelectedSessionId$ = new BehaviorSubject<string>("none");
  private _bsCustomerId$ = new BehaviorSubject<string|null>(null);

  public get bsSelectedSessionId$() : BehaviorSubject<string>{ 
    return this._bsSelectedSessionId$ 
  }

  public setSelectedSessionId(selectedSessionId:string){
    this.storeSessionKeyValue("userSession.selectedSessionId" ,selectedSessionId);
    this._bsSelectedSessionId$.next(selectedSessionId);
  }

  public get bsCustomerId$() : BehaviorSubject<string|null>{ 
    return this._bsCustomerId$ 
  }

  public setCustomerId(customerId:string|null){
    this.storeSessionKeyValue("userSession.customerId" ,customerId);
    this._bsCustomerId$.next(customerId);
  }

  constructor() { super(); 
    let selectedSessionId = this.retreiveSessionValue("userSession.selectedSessionId",null)
    this._bsSelectedSessionId$.next(selectedSessionId);
    let customerId = this.retreiveSessionValue("userSession.customerId",null)
    this._bsCustomerId$.next(customerId);
  }
}
