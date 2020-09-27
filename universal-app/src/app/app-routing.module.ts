import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { ProduitsComponent} from './produits/produits.component';
import { DevisesComponent} from './devises/devises.component';
const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: 'ngr-produits', component: ProduitsComponent },
  { path: 'ngr-devises', component: DevisesComponent },
  { path: 'ngr-mylazy1', loadChildren: () => import('./my-lazy/my-lazy.module').then(m => m.MyLazyModule)},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
