import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FamilyIdentificationComponent } from './user-profile/family-identification/family-identification.component';
import { BioDataComponent } from './user-profile/bio-data/bio-data.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
