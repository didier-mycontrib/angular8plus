import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { NewsComponent } from './news/news.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ProductsComponent } from './browse-products/products/products.component';
import { ProductDetailsComponent } from './browse-products/product-details/product-details.component';
import { CanActivatePublisherRouteGuard, CanActivateAdminRouteGuard } from './common/gard/can-activate-route-guard';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { WithAnimationsComponent } from './advanced/with-animations/with-animations.component';
import { ChatComponent } from './advanced/chat/chat.component';
import { AdminProdIdbComponent } from './advanced/admin-prod-idb/admin-prod-idb.component';
import { WithTraductionComponent } from './advanced/with-traduction/with-traduction.component';
import { WithInjectionComponent } from './advanced/with-injection/with-injection.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AsidePanelAComponent } from './aside-panel-a/aside-panel-a.component';
import { AsidePanelBComponent } from './aside-panel-b/aside-panel-b.component';
import { NewsResolver } from './common/resolver/new.resolver';



const routes: Routes = [
/*
{ path: 'asidePanelA', component: AsidePanelAComponent , outlet : 'aside'},
{ path: 'asidePanelB', component: AsidePanelBComponent , outlet : 'aside'},    
 */
{ path: 'ngr-welcome', component: WelcomeComponent },
/*{ path: '', redirectTo: '/ngr-welcome(aside:asidePanelA)', pathMatch: 'full'},*/
{ path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
{ path: 'ngr-basic', component: BasicComponent } ,
{ path: 'ngr-news', component: NewsComponent , resolve: { publications: NewsResolver }} ,
{ path: 'ngr-stats', component: StatsComponent , canActivate: [CanActivateAdminRouteGuard] } ,
{ path: 'ngr-browse-products', component: BrowseProductsComponent ,
children: [
  { path: 'prodList/:category', component: ProductsComponent },
  { path: 'prod-details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'prodList/divers', pathMatch: 'prefix'}
  ] } ,
{ path: 'ngr-with-animations', component: WithAnimationsComponent } ,
{ path: 'ngr-with-traductions', component:WithTraductionComponent} ,
{ path: 'ngr-with-injections', component:WithInjectionComponent} ,
{ path: 'ngr-chat', component: ChatComponent } ,
{ path: 'ngr-admin-prod-idb', component: AdminProdIdbComponent } ,
{ path: 'ngr-security', component: AdminSecurityComponent } ,
{ path: 'ngr-login', component: LoginComponent  } ,
{ path: 'ngr-not-authorized', component: NotAuthorizedComponent } ,
{ path: 'ngr-admin-news', component: AdminNewsComponent , canActivate: [CanActivatePublisherRouteGuard] } ,
{ path: 'ngr-admin-devise' , component: AdminDeviseComponent, canActivate: [CanActivateAdminRouteGuard]  },
{ path: '**' ,redirectTo: 'ngr-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
