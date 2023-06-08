import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { atLeastOneCheckboxNeedToBeSelected } from '@shared/validators/custom-validators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { merge } from 'rxjs';
import { CantContinueModalComponent } from './cant-continue-modal/cant-continue-modal.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  bsModalRef!: BsModalRef;

  firstFormGroup = this._formBuilder.group({
    patientId: ['ID58942', Validators.required],
  });
  get ffg() {
    return this.firstFormGroup.controls;
  }

  secondFormGroup = this._formBuilder.group({
    ethnicity: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    isPragnent: [false],
    isExperienceHeartAttack: [false],
    isHasEyeIssue: [false],
    isNone: [false],
  });
  get sfg() {
    return this.secondFormGroup.controls;
  }
  isLinear = false;
  deviceOrientation!: StepperOrientation;
  constructor(
    private _formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {
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
    let arr: AbstractControl[] = [];
    this.secondFormGroup.addValidators(
      atLeastOneCheckboxNeedToBeSelected([
        this.secondFormGroup.get('isPragnent')!,
        this.secondFormGroup.get('isExperienceHeartAttack')!,
        this.secondFormGroup.get('isHasEyeIssue')!,
        this.secondFormGroup.get('isNone')!,
      ])
    );

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
      console.log(this.secondFormGroup);
      if (!isCheckedAny) return;
      this.secondFormGroup.controls.isNone.setValue(false);
    });
  }

  goForward(stepper: MatStepper) {
    if (this.secondFormGroup.invalid) return;
    if (this.secondFormGroup.valid && this.sfg.isNone.value) {
      stepper.next();
      return;
    }

    //open modal
    this.bsModalRef = this.modalService.show(CantContinueModalComponent, {
      animated: true,
      class: 'cant-continue-modal-wrapper',
    });
  }
}
