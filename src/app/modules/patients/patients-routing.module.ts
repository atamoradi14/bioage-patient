import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CanDeactivateGuard } from '@shared/guards/cand-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'add',
    component: AddPatientComponent,
    canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
