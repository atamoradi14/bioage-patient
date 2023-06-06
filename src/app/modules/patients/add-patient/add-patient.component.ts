import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent {
  firstFormGroup = this._formBuilder.group({
    patientId: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  deviceOrientation!: StepperOrientation;
  constructor(private _formBuilder: FormBuilder) {
    this.onOrientationChange(null);
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    console.log(event);
    console.log(window.screen.orientation.type);

    if (window.screen.orientation.type.includes('portrait')) {
      this.deviceOrientation = 'vertical';
    } else {
      this.deviceOrientation = 'horizontal';
    }

    console.log('orientationChanged');
  }
}
