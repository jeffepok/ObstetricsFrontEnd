import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPopOverComponent } from './create-account-pop-over.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [CreateAccountPopOverComponent],
  exports: [CreateAccountPopOverComponent]
})
export class CreateAccountPopOverComponentModule {}
