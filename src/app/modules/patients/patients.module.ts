import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { SharedModule } from '@shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CantContinueModalComponent } from './add-patient/cant-continue-modal/cant-continue-modal.component';
import { FlowCompleteModalComponent } from './add-patient/flow-complete-modal/flow-complete-modal.component';



@NgModule({
  declarations: [
    PatientsComponent,
    AddPatientComponent,
    CantContinueModalComponent,
    FlowCompleteModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
