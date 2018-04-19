/**
 * Created by Galois Zhou on 20/12/2017 15:15.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpAuthInterceptor} from './providers/http/http-auth.interceptor';
import {HttpService} from './providers/http/http.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserService} from './providers/user/user.service';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user/user.component';
import {TemplateComponent} from './components/common/template/template.component';
import {AlertService} from './providers/alert/alert.service';
import {BsDatepickerModule, BsDropdownModule, ModalModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import {ConfirmComponent} from './components/common/confirm/confirm.component';
import {DialogService} from './providers/dialog/dialog.service';
import {PageComponent} from './components/common/page/page.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ShopComponent} from './components/shop/shop.component';
import {ShopService} from './providers/shop/shop.service';
import {AddressPipe} from './pipes/address/address.pipe';
import {ShopDetailComponent} from './components/shop/shop-detail/shop-detail.component';
import {ShopStatisticsComponent} from './components/statistics/shop-statistics/shop-statistics.component';
import {StatisticDateComponent } from './components/common/statistic-date/statistic-date.component';
import { ShopAcitveComponent } from './components/statistics/shop-acitve/shop-acitve.component';
import {StatisticsService} from "./providers/statistics/statistics.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    TemplateComponent,
    ConfirmComponent,
    PageComponent,
    ShopComponent,
    AddressPipe,
    ShopDetailComponent,
    ShopStatisticsComponent,
    StatisticDateComponent,
    ShopAcitveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    HttpService,
    UserService,
    AlertService,
    DialogService,
    ShopService,
    StatisticsService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
  ],
  entryComponents: [
    ConfirmComponent,
    PageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
