import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithChangesComponent } from './with-changes/with-changes.component';
import { MyChildComponent } from './with-changes/my-child/my-child.component';
import { InOutLifeCycleComponent } from './with-changes/in-out-life-cycle/in-out-life-cycle.component';
import { InsideOutsideZoneComponent } from './with-changes/inside-outside-zone/inside-outside-zone.component';
import { CustomDetectionComponent } from './with-changes/custom-detection/custom-detection.component';
import { HighlightDirective } from './common/directive/highlight-directive';
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithChildComponent } from './with-child/with-child.component';
import { AChildComponent } from './with-child/a-child/a-child.component';
import { WithContentComponent } from './with-content/with-content.component';
import { MyTabsetComponent } from './with-content/my-tabset/my-tabset.component';
import { MyTabComponent } from './with-content/my-tab/my-tab.component';
import { UnlessDirective } from './common/directive/unless.directive';
import { MyMatchSizeOfChildsDirective } from './common/directive/my-match-size-of-childs.directive';
import { AdvancedComponent } from './advanced/advanced/advanced.component';
import { WithAnimationsComponent } from './advanced/with-animations/with-animations.component';
import { WithTraductionComponent } from './advanced/with-traduction/with-traduction.component';
import { WithInjectionComponent } from './advanced/with-injection/with-injection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyStringService } from './advanced/service/MyStringService';
import { MyStringServiceV1 } from './advanced/service/MyStringServiceV1';
import { MyStringServiceV2 } from './advanced/service/MyStringServiceV2';
import { APP_TITLE } from './common/token/global-tokens';



//import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    WithChangesComponent,
    MyChildComponent,
    InOutLifeCycleComponent,
    InsideOutsideZoneComponent,
    CustomDetectionComponent,
    HighlightDirective,
    WithDirectiveComponent,
    HeaderComponent,
    WelcomeComponent,
    WithChildComponent,
    AChildComponent,
    WithContentComponent,
    MyTabsetComponent,
    MyTabComponent,
    UnlessDirective,
    MyMatchSizeOfChildsDirective,
    AdvancedComponent,
    WithTraductionComponent,
    WithInjectionComponent,
    WithAnimationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //StoreModule.forRoot({}, {}),
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [
    {provide: APP_TITLE, useValue: 'exp_adv_app' },
    { provide: MyStringService, useClass: MyStringServiceV1 }
    //{ provide: MyStringService, useClass: MyStringServiceV2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
