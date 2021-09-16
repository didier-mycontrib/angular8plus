import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthErrorEvent, OAuthInfoEvent, OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { IData } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  authenticated : boolean = false;
  grantedScopes : string[]= [];
  username : string = "?";
  data : IData = { p1: "abc" , p2 : "def"  };

  constructor(private oauthService: OAuthService , private router : Router) { 
        this.initOAuthServiceForCodeFlow();
  }

  initOAuthServiceForCodeFlow(){
    const authCodeFlowConfig: AuthConfig = {
      // Url of the Identity Provider
      issuer: 'http://localhost:8989/auth/realms/myrealm',
  
      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin + "/ngr-loggedIn",

      silentRefreshRedirectUri: window.location.origin + "/silent-refresh.html",
      useSilentRefresh: true,
      
      postLogoutRedirectUri : window.location.origin + "/ngr-logInOut", 
      //ou /ngr-welcome ou ...
  
      // The SPA's id. The SPA is registered with this id at the auth-server
      // clientId: 'server.code',
      clientId: 'webappclient2',
      //clientSecret if necessary (not very useful for web SPA)
      //dummyClientSecret: 'ee3f886b-0b4d-4529-9d0c-e61ca4b91d96',
      responseType: 'code',
  
      // set the scope for the permissions the client should request
      // The first four are defined by OIDC.
      // Important: Request offline_access to get a refresh token
      // The api scope is a usecase specific one
      scope: 'openid profile resource.read resource.write resource.delete',
  
      showDebugInformation: true,
    };
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.oidc = true; // ID_Token

    this.oauthService.setStorage(sessionStorage);
    
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.events.subscribe(
      event => {
        if (event instanceof OAuthSuccessEvent) {
          //console.log("OAuthSuccessEvent: "+JSON.stringify(event));
          console.log("OAuthSuccessEvent: "+event.type);
          this.manageSuccessEvent(event);
        }
        if (event instanceof OAuthInfoEvent) {
         // console.log("OAuthInfoEvent: "+JSON.stringify(event));
         console.log("OAuthInfoEvent: "+event.type);
        }
        if (event instanceof OAuthErrorEvent) {
         // console.error("OAuthErrorEvent: "+JSON.stringify(event));
         console.log("OAuthErrorEvent: "+event.type);
        } else {
          console.warn(event.type);
        }
      });

  }//end of initOAuthServiceForCodeFlow

  manageSuccessEvent(event : OAuthSuccessEvent){
    if(event.type=="token_received" ){
      console.log("***** token_received ****")
      this.authenticated = true;
      let grantedScopesObj : object = this.oauthService.getGrantedScopes();
      this.grantedScopes =<any> grantedScopesObj;
      console.log("grantedScopes="+JSON.stringify(this.grantedScopes));

      var claims : any = this.oauthService.getIdentityClaims();
      console.log("claims="+JSON.stringify(claims))
      if (claims) this.username= claims.preferred_username + "("+ claims.name + ")";
      
      /*
      //not necessary with popup and silent-refresh
      let savedData = sessionStorage.getItem("data");
      if(savedData){
        this.data = JSON.parse(savedData)
      }
      */
     if(this.oauthService.silentRefreshRedirectUri != null){
       this.router.navigateByUrl("/ngr-loggedIn");
     }
    }
  }


  delegateOidcLogin(){
      /*
      //not necessary with popup and silent-refresh:
      sessionStorage.setItem("data",JSON.stringify(this.data)) //store session data before redirect and lost
     */

      //this.oauthService.initImplicitFlow(); //Attention: possible que si configuré par le serveur OAuth2/OIDC .
      //this.oauthService.initCodeFlow(); //c'est mieux

      //this.oauthService.initLoginFlow(); //appel en interne
      //.initImplicitFlow(); ou .initCodeFlow(); 
      //selon la configuration préalablement enregistrée.

      this.oauthService.initLoginFlowInPopup();
  }

  oidcLogout(){
       //this.oauthService....
       this.oauthService.logOut(); //clear tokens in storage and redirect to logOutEndpoint
       //this.oauthService.revokeTokenAndLogout(); //warning : problems if no CORS settings !!!!
  }

 

  public get accessTokenString() : string {
    return this.oauthService.getAccessToken();
  }

}
