import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPopOverComponent } from './create-account-pop-over.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [CreateAccountPopOverComponent],
  exports: [CreateAccountPopOverComponent]
})
export class CreateAccountPopOverComponentModule {}
