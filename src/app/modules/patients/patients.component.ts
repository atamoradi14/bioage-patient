import { Component, OnInit } from '@angular/core';
import { PatientModel } from './models/patient-model';
import { PaginationModel } from '@shared/models/pagination.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patientList: PatientModel[] = patients;

  pagination = new PaginationModel();

  constructor() {}

  ngOnInit(): void {
    this.pagination.totalItems = this.patientList.length;
    this.pagination.totalPages = 1;
    this.pagination.currentPage = 1;
  }

  onSort(type: string) {
    //sortAssessment(this.assessmentResults, type);
  }

  changeItemsPerPage(itemsPerPage: number) {
    this.pagination.itemsPerPage = itemsPerPage;
  }

  pageChange(page:number){

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
