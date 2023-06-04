import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {


  onSort(type: string){
    //sortAssessment(this.assessmentResults, type);
  }
}
