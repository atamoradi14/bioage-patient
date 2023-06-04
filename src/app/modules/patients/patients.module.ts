import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { SharedModule } from '@shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';



@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
