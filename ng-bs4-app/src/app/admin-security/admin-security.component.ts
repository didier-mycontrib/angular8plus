import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-admin-security',
  templateUrl: './admin-security.component.html',
  styleUrls: ['./admin-security.component.scss']
})
export class AdminSecurityComponent implements OnInit {

  secureMode : boolean = null;
  msg:string = "";
  currentTokenInSessionStorage : string = null;

  constructor(private _authService : AuthService) { }

  onSettingSecureMode(evt) {
    this.msg="";
    let newSecureMode = evt.target.checked; //checkbox
    this._authService.setSecureMode(newSecureMode)
       .subscribe(
          (secureModeDto)=>{this.secureMode = secureModeDto.secureMode; 
                            this.msg="secureMode="+this.secureMode; } ,
          (err) => { console.log(err); this.secureMode=null; this.msg="secureMode not changed / cannot access remote backend "}
       );
  }

  ngOnInit() {
    this.msg="";
    this._authService.getSecureMode()
       .subscribe(
          (secureModeDto)=>{this.secureMode = secureModeDto.secureMode; 
                            this.msg="secureMode="+this.secureMode;} ,
          (err) => { console.log(err); this.secureMode=null;
                     this.msg="secureMode not retreived / cannot access remote backend "}
       );
    this.currentTokenInSessionStorage = sessionStorage.getItem("authToken");
  }

}
