import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithChangesComponent } from './with-changes/with-changes.component';
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { WithChildComponent } from './with-child/with-child.component';
import { WithContentComponent } from './with-content/with-content.component';
import { AdvancedComponent } from './advanced/advanced/advanced.component';

const routes: Routes = [
  { path: 'welcome',  component: WelcomeComponent }, 
  {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
  { path: 'withChanges',  component: WithChangesComponent }, 
  { path: 'withDirective',  component: WithDirectiveComponent }, 
  { path: 'withChild',  component: WithChildComponent }, 
  { path: 'withContent',  component: WithContentComponent },
  { path: 'advanced',  component: AdvancedComponent },
  { path: 'mylazy1', loadChildren: () => import('./my-lazy/my-lazy.module').then(m => m.MyLazyModule)},
  { path: 'mylazy2', loadChildren: () => import('./my-lazy2/my-lazy2.module').then(m => m.MyLazy2Module) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
