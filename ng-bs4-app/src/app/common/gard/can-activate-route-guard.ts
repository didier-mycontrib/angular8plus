import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class CanActivatePublisherRouteGuard implements CanActivate {

constructor(private _authService: AuthService) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this._authService.currentSecureMode==false)
        return true;
    else
       return this._authService.isUserAuthenticatedWithRole("publisher");
    }
}

@Injectable({
    providedIn: 'root'
  })
export class CanActivateAdminRouteGuard implements CanActivate {

constructor(private _authService: AuthService,
            private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if(this._authService.currentSecureMode==false)
        return true;
    else{
       if(this._authService.isUserAuthenticatedWithRole("admin")){
           return true;
       }
       else{
           //return false;
           
           //NB: since v7.1 , canActivate can return a UrlTree
           //for redirecting (and not only blocking):
           return this.router.parseUrl('/ngr/not-authorized');
           //or this.router.createUrlTree(['/ngr/not-authorized']);
       }
       }
    }
}