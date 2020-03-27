import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithTableComponent } from './with-table/with-table.component';
import { WithTreeComponent } from './with-tree/with-tree.component';
import { WithStepsComponent } from './with-steps/with-steps.component';


const routes: Routes = [
{ path: 'welcome', component: WelcomeComponent },
{ path: '', redirectTo: '/welcome', pathMatch: 'full'},
{ path: 'basic', component: BasicComponent } ,
{ path: 'withTable', component: WithTableComponent } ,
{ path: 'withTree', component: WithTreeComponent } ,
{ path: 'withSteps', component: WithStepsComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
