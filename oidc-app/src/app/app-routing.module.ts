import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { DeviseComponent } from './devise/devise.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';
import { SuiteAuthComponent } from './suite-auth/suite-auth.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: 'ngr-logInOut', component: LogInOutComponent },
  { path: 'ngr-loggedIn', component: SuiteAuthComponent },
  { path: 'ngr-devise', component: DeviseComponent },
  { path: 'ngr-admin-devise', component: AdminDeviseComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
