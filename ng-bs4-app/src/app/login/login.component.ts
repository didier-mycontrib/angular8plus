import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../common/service/auth.service';
import { AuthRequest } from '../common/data/auth-request';
import { AuthResponse } from '../common/data/auth-response';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authRequest : AuthRequest = new  AuthRequest();
  authResponse : AuthResponse = null;
  errorMsg : string = null;

  constructor(public authService : AuthService,
              public jwtHelper: JwtHelperService) {
    this.authRequest.password="pwd";
   }

   public onFormInit(){

   }

  public onSubmit(){
    this.errorMsg=null;
    this.authService.postAuth(this.authRequest)
        .subscribe(
          (authResponse)=>{ this.authResponse=authResponse; this.logJwtToken();} ,
          (err)=>{console.log(err);this.errorMsg="cannot login / cannot access remote backend"  }
        );
  }

  ngOnInit() {
  }

  logJwtToken(authToken:string=null){
    let token = authToken;
    if(token==null)
       token = sessionStorage.getItem("authToken");
    console.log("isTokenExpired="+this.jwtHelper.isTokenExpired(token)); // true or false
    console.log("tokenExpirationDate="+this.jwtHelper.getTokenExpirationDate(token)); // date
    console.log("jwt payload="+this.jwtHelper.decodeToken(token)); // token
  }

  @ViewChild('formLogin', { static : false}) 
  form : NgForm ;

}
