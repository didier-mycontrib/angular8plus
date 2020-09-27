import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLazy2Component } from './my-lazy2.component';

const routes: Routes = [{ path: '', component: MyLazy2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLazy2RoutingModule { }
