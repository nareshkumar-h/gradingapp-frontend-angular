import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './core/adminlogin/adminlogin.component';
import { UserloginComponent } from './core/userlogin/userlogin.component';
import { HeaderComponent } from './layout/header/header.component';
import { AdminheaderComponent } from './layout/adminheader/adminheader.component';
import { UserheaderComponent } from './layout/userheader/userheader.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home/home.component';
import { AdminfeatureComponent } from './core/adminhome/adminfeature/adminfeature.component';
import { HttpClientModule } from '@angular/common/http';
import { DefineScoreRangeComponent } from './core/adminhome/define_score_range/define-score-range/define-score-range.component';
import { UserfeatureComponent } from './core/userhome/userfeature/userfeature/userfeature.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    HeaderComponent,
    AdminheaderComponent,
    UserheaderComponent,
    FooterComponent,
    HomeComponent,
    AdminfeatureComponent,
    DefineScoreRangeComponent,
    UserfeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
