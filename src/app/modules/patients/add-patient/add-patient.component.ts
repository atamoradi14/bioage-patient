import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    patientId: ['ID58942', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    ethnicity: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    isPragnent: [false],
    isExperienceHeartAttack: [false],
    isHasEyeIssue: [false],
    isNone: [false],
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

  ngOnInit(): void {
    this.secondFormGroup.controls.isNone.valueChanges.subscribe((isChecked) => {
      if (!isChecked) return;
      this.secondFormGroup.controls.isPragnent.setValue(false);
      this.secondFormGroup.controls.isExperienceHeartAttack.setValue(false);
      this.secondFormGroup.controls.isHasEyeIssue.setValue(false);
    });

    merge(
      this.secondFormGroup.controls.isPragnent.valueChanges,
      this.secondFormGroup.controls.isExperienceHeartAttack.valueChanges,
      this.secondFormGroup.controls.isHasEyeIssue.valueChanges
    ).subscribe((isCheckedAny) => {
      if (!isCheckedAny) return;
      this.secondFormGroup.controls.isNone.setValue(false);
    });
  }
}
