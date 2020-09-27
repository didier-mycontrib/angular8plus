import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XxComponent } from './xx/xx.component';
import { YyComponent } from './yy/yy.component';
import { MyLazyRoutingModule } from './my-lazy-routing.module';



@NgModule({
  declarations: [XxComponent, YyComponent],
  imports: [
    CommonModule , MyLazyRoutingModule
  ]
})
export class MyLazyModule { }
