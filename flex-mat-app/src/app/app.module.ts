import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';

import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularFlexLayoutComponent } from './basic/demo-angular-flex-layout/demo-angular-flex-layout.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MySideNavComponent } from './my-side-nav/my-side-nav.component';
import { VariousFormComponent } from './basic/various-form/various-form.component';
import { ImportMaterialModule } from './common/imports/import-material.module';
import { DiversComponent } from './basic/divers/divers.component';
import { ExampleDialogComponent } from './basic/divers/example-dialog/example-dialog.component';
import { WithTableComponent } from './with-table/with-table.component';
import { WithTreeComponent } from './with-tree/with-tree.component';
import { WithStepsComponent } from './with-steps/with-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    BasicComponent,
    TvaComponent,
    DemoAngularFlexLayoutComponent,
    MySideNavComponent,
    VariousFormComponent,
    DiversComponent,
    ExampleDialogComponent,
    WithTableComponent,
    WithTreeComponent,
    WithStepsComponent
  ],
  entryComponents: [ExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ImportMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
