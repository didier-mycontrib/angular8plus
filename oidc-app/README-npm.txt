npm install angular-oauth2-oidc --save
=================
NB: for silent-refresh in popup , we need to:

* add in angular.json:

"assets": [
              "src/favicon.ico",
              "src/assets",
              "src/silent-refresh.html"
            ],

* src/silent-refresh.html (as in https://manfredsteyer.github.io/angular-oauth2-oidc/docs/additional-documentation/silent-refresh.html)            

* configure like this:

      ...
      redirectUri: window.location.origin + "/ngr-loggedIn",
      silentRefreshRedirectUri: window.location.origin + "/silent-refresh.html",
      useSilentRefresh: true,
      ....

* call oauthService.initLoginFlowInPopup();   instead of this.oauthService.initLoginFlow();  

* after login & silent-refresh , token_received is triggered
  ( this.oauthService.events.subscribe(...) )