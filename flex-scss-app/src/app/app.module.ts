import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { MyGenericComponentsModule } from 'src/my-generic-components/my-generic-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyGenericComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
