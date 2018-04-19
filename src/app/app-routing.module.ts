/**
 * Created by Galois Zhou on 20/12/2017 15:16.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserComponent} from './components/user/user.component';
import {TemplateComponent} from './components/common/template/template.component';
import {ShopComponent} from './components/shop/shop.component';
import {ShopStatisticsComponent} from "./components/statistics/shop-statistics/shop-statistics.component";

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shopStatistics', component: ShopStatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
