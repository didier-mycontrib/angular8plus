import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../common/service/auth.service';
import { AuthRequest } from '../common/data/auth-request';
import { AuthResponse } from '../common/data/auth-response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authRequest : AuthRequest = new  AuthRequest();
  authResponse : AuthResponse = null;
  errorMsg : string = null;

  constructor(public authService : AuthService) {
    this.authRequest.password="pwd";
   }

   public onFormInit(){

   }

  public onSubmit(){
    this.errorMsg=null;
    this.authService.postAuth(this.authRequest)
        .subscribe(
          (authResponse)=>{ this.authResponse=authResponse; } ,
          (err)=>{console.log(err);this.errorMsg="cannot login / cannot access remote backend"  }
        );
  }

  ngOnInit() {
  }

  @ViewChild('formLogin', { static : false}) 
  form : NgForm ;

}
