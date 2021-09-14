import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { LogInOutComponent } from './log-in-out/log-in-out.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuiteAuthComponent } from './suite-auth/suite-auth.component';
import { HeaderComponent } from './header/header.component';
import { DeviseComponent } from './devise/devise.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInOutComponent,
    WelcomeComponent,
    SuiteAuthComponent,
    HeaderComponent,
    DeviseComponent,
    AdminDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
