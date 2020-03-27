import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VatComponent } from './vat/vat.component';
import { ConversionComponent } from './conversion/conversion.component';


const routes: Routes = [
  { path: 'welcome' , component : WelcomeComponent},
  { path: 'vat' , component : VatComponent},
  { path: 'conversion' , component : ConversionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
