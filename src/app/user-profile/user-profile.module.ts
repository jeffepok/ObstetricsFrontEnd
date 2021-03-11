import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BiodataComponent } from './biodata/biodata.component';
import { FamilyIdentificationComponent } from './family-identification/family-identification.component';
import { CurrentPregnancyRecordComponent } from './current-pregnancy-record/current-pregnancy-record.component';
import { PregnancyInvestigationsComponent } from './pregnancy-investigations/pregnancy-investigations.component';
import { PreviousPregnancyHistoryComponent } from './previous-pregnancy-history/previous-pregnancy-history.component';



@NgModule({
  declarations: [
    UserProfileComponent, 
    BiodataComponent,
    FamilyIdentificationComponent,
    CurrentPregnancyRecordComponent,
    PregnancyInvestigationsComponent,
    PreviousPregnancyHistoryComponent
  ],
  entryComponents: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class UserProfileModule { }
