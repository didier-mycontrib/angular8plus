import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { pubReducer } from './pub.reducer';
import { MyLazy2RoutingModule } from './my-lazy2-routing.module';
import { MyLazy2Component } from './my-lazy2.component';
import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [MyLazy2Component, MyCounterComponent],
  imports: [
    CommonModule,
    MyLazy2RoutingModule,
    // bind "counterReducer" to "count" (sub-)part  
    // and "pubReducer" to "pub" (sub-)part 
    // of global state in @ngrx/store
    StoreModule.forRoot({ count: counterReducer ,
                          pub : pubReducer })
  ]
})
export class MyLazy2Module { }
