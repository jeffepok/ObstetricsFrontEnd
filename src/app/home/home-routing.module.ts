import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioDataComponent } from '../user-profile/bio-data/bio-data.component';
import { FamilyIdentificationComponent } from '../user-profile/family-identification/family-identification.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'user',
    component: UserProfileComponent,
  },
  {path: 'user', component: UserProfileComponent, outlet: 'info'},
  { path: 'biodata', component: BioDataComponent, outlet: 'info' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
