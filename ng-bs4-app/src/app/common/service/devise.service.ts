import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ResConv } from '../data/res-conv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //avec ng serve --proxy-config proxy.conf.json
  private basePublicUrl = "./devise-api/public/devise";
  private basePrivateUrl = "./devise-api/private/role_admin/devise";
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  public convertir( montant  : number,  source :string ,   cible : string) : Observable<ResConv> {
    let convertirUrl : string = null;
    convertirUrl = "./devise-api/public/convert?amount="+montant
                   +"&source="+source+"&target=" + cible ;
    console.log( "convertirUrl = " + convertirUrl);
    return this.http.get<ResConv>(convertirUrl );
  }

  postDevise(dev : Devise):Observable<Devise>{
    return this.http.post<Devise>(this.basePrivateUrl ,dev,{headers: this._headers} );
  }

  putDevise(dev : Devise):Observable<Devise>{
    return this.http.put<Devise>(this.basePrivateUrl ,dev,{headers: this._headers} );
  }

  public deleteDeviseServerSide(deviseCode):Observable<any>{
    console.log("will deleting devise of code = " +  deviseCode );
    let  deleteUrl : string = this.basePrivateUrl + "/"  +  deviseCode ;
    console.log("deleteUrl= " + deleteUrl );
    return this.http.delete(deleteUrl );
   }

  public getDevises() : Observable<Devise[]> {
    let deviseUrl : string = null;
    deviseUrl = this.basePublicUrl ;
    console.log( "deviseUrl = " + deviseUrl);
    return this.http.get<Devise[]>(deviseUrl );
  }
/*
  public initDevises() : Observable<Devise[]> {
    let initDeviseUrl  ="./devise-api/public/init-devises";
    console.log( "initDeviseUrl = " + initDeviseUrl);
    return this.http.get<Devise[]>(initDeviseUrl );
  }
  */

  constructor(private http : HttpClient) { }
}
