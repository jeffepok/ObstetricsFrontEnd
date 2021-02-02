import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CreateAccountPopOverComponent } from './create-acount/create-account-pop-over/create-account-pop-over.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomePage, CreateAccountPopOverComponent],

  entryComponents: [
    CreateAccountPopOverComponent
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
