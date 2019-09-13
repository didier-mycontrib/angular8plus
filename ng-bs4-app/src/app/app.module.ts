import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';

import { ChartsModule } from 'ng2-charts';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { FormsModule } from '@angular/forms';
import { TvaComponent } from './basic/tva/tva.component';
import { SimuEmpruntComponent } from './basic/simu-emprunt/simu-emprunt.component';
import { NewsComponent } from './news/news.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './browse-products/products/products.component';
import { ProductDetailsComponent } from './browse-products/product-details/product-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from './common/interceptor/my-auth-interceptor';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { ConversionComponent } from './basic/conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    BasicComponent,
    TvaComponent,
    SimuEmpruntComponent,
    NewsComponent,
    AdminDeviseComponent,
    ConversionComponent,
    AdminNewsComponent,
    LoginComponent,
    StatsComponent,
    BrowseProductsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AdminSecurityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    BsUtilModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS,
        useClass: MyAuthInterceptor,
        multi: true    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
