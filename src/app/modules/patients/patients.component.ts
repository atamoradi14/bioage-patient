import { Component } from '@angular/core';
import { PatientModel } from './models/patient-model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  patientList: PatientModel[] = patients;

  constructor() {}

  onSort(type: string) {
    //sortAssessment(this.assessmentResults, type);
  }
}

const patients = [
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
  {
    id: 'ID01454213',
    email: 'personal@email.com',
  },
];
