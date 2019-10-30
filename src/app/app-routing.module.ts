import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './core/adminlogin/adminlogin.component';
import { UserloginComponent } from './core/userlogin/userlogin.component';
import { HeaderComponent } from './layout/header/header.component';
import { AdminheaderComponent } from './layout/adminheader/adminheader.component';
import { UserheaderComponent } from './layout/userheader/userheader.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home/home.component';
import { AdminfeatureComponent } from './core/adminhome/adminfeature/adminfeature.component';
import { DefineScoreRangeComponent } from './core/adminhome/define_score_range/define-score-range/define-score-range.component';
import { UserfeatureComponent } from './core/userhome/userfeature/userfeature/userfeature.component';


const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
 { path: 'userlogin', component: UserloginComponent },
 { path: 'header', component: HeaderComponent },
 { path: 'userlogin', component: AdminheaderComponent },
 { path: 'userlogin', component: UserheaderComponent },
 { path: 'footer', component: FooterComponent },
 { path: 'home', component: HomeComponent },
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: 'adminfeature', component: AdminfeatureComponent },
 { path: 'define-score-range', component: DefineScoreRangeComponent },
 { path: 'userfeature', component: UserfeatureComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
