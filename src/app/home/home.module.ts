import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CreateAccountPopOverComponent } from './create-acount/create-account-pop-over/create-account-pop-over.component';
import { HttpClientModule } from '@angular/common/http';
import { BioDataComponent } from '../user-profile/bio-data/bio-data.component';
import { FamilyIdentificationComponent } from '../user-profile/family-identification/family-identification.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@NgModule({
  declarations: [
    HomePage, 
    CreateAccountPopOverComponent, 
    BioDataComponent,
    UserProfileComponent,
    FamilyIdentificationComponent
  ],

  entryComponents: [
    CreateAccountPopOverComponent,
    BioDataComponent,
    UserProfileComponent,
    FamilyIdentificationComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  
})
export class HomePageModule {}
