import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../data/auth-request';
import { AuthResponse } from '../data/auth-response';
import { tap } from 'rxjs/operators';


export interface SecureModeDto{
  secureMode: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentSecureMode : boolean = null;
  public lastAuthResponse : AuthResponse = null; //last succeeding response only

  constructor(private _http : HttpClient) { }
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});
  private _authBaseUrl = "/login-api/public/auth" ; //avec ng serve --proxy-config proxy.conf.json

  postAuth(auth : AuthRequest):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(this._authBaseUrl ,auth,{headers: this._headers} )
    .pipe(
      //tap( other async task without transforming result)
      tap( (authResponse) => { this.storeAuthResponseAndToken(authResponse); })
    );
  }

  
  getSecureMode():Observable<SecureModeDto>{
    let getSecureModeUrl = "/auth-api/public/dev-only/get-secure-mode";
    return this._http.get<SecureModeDto>(getSecureModeUrl)
    .pipe(
      //tap( other async task without transforming result)
      tap( (secureModeDto) => { this.currentSecureMode = secureModeDto.secureMode; })
    );
  }

  setSecureMode(newSecureMode : boolean):Observable<SecureModeDto>{
    let setSecureModeUrl = "/auth-api/public/dev-only/set-secure-mode/"+newSecureMode;
    //EXCEPTIONNELLEMENT: SETTING NEW VALUE via GET (DEV-ONLY) !!!!
    return this._http.get<SecureModeDto>(setSecureModeUrl)
    .pipe(
      //tap( other async task without transforming result)
      tap( (secureModeDto) => { this.currentSecureMode = secureModeDto.secureMode; })
    );
  }

  

  private storeAuthResponseAndToken(authResponse : AuthResponse){
    if(authResponse.status){
        this.lastAuthResponse = authResponse;
        sessionStorage.setItem("authToken",authResponse.token);
    }
    else{ 
        this.lastAuthResponse = null;
        sessionStorage.setItem("authToken",null);
    }
  }

  public isUserAuthenticatedWithRole(roleName:string):boolean{
    let arrayOfUserRoles = [];
    if(this.lastAuthResponse && this.lastAuthResponse.roles )
        arrayOfUserRoles = this.lastAuthResponse.roles.split(',');
    return arrayOfUserRoles.includes(roleName);
  }

   
}
