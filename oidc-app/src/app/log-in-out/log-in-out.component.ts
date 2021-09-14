import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.component.html',
  styleUrls: ['./log-in-out.component.scss']
})
export class LogInOutComponent implements OnInit {

  constructor(private oauthService: OAuthService,
              public sessionService : SessionService) {
  }

  public login() {
      this.sessionService.delegateOidcLogin();
  }

  public logout() {
      this.sessionService.oidcLogout();
  }



  ngOnInit(): void {
  }

}
