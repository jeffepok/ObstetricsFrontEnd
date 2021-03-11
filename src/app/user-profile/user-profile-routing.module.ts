import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { CurrentPregnancyRecordComponent } from './current-pregnancy-record/current-pregnancy-record.component';
import { FamilyIdentificationComponent } from './family-identification/family-identification.component';
import { PregnancyInvestigationsComponent } from './pregnancy-investigations/pregnancy-investigations.component';
import { PreviousPregnancyHistoryComponent } from './previous-pregnancy-history/previous-pregnancy-history.component';
import { UserProfileComponent } from './user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: 'biodata',
        component: BiodataComponent
      },
      {
        path: 'family-identification',
        component: FamilyIdentificationComponent      
      },
      {
        path: 'current-pregnancy-record',
        component: CurrentPregnancyRecordComponent      
      },
      {
        path: 'pregnancy-investigations',
        component: PregnancyInvestigationsComponent      
      },
      {
        path: 'previous-pregnancy-history',
        component: PreviousPregnancyHistoryComponent      
      },
    ]
  }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
