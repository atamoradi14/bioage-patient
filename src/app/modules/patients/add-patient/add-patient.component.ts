import { StepperOrientation } from '@angular/cdk/stepper';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { atLeastOneCheckboxNeedToBeSelected } from '@shared/validators/custom-validators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, merge, of } from 'rxjs';
import { CantContinueModalComponent } from './cant-continue-modal/cant-continue-modal.component';
import { Router } from '@angular/router';
import { FlowCompleteModalComponent } from './flow-complete-modal/flow-complete-modal.component';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  bsModalRef!: BsModalRef;

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  sig!: SignaturePad;
  today = new Date();
  canvasWidth = 590;

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

  thirdFormGroup = this._formBuilder.group({
    optOut: [''],
    signature: [],
  });

  isLinear = false;
  deviceOrientation!: StepperOrientation;

  isCanDeactive = false;

  constructor(
    private _formBuilder: FormBuilder,
    private modalService: BsModalService,
    private router: Router
  ) {
    this.onOrientationChange(null);
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    console.log(event);
    console.log(window.screen.orientation.type);

    if (window.screen.orientation.type.includes('portrait')) {
      this.deviceOrientation = 'vertical';
      this.canvasWidth = 590;
    } else {
      this.deviceOrientation = 'horizontal';
      this.canvasWidth = 770;
    }

    console.log('orientationChanged');
  }

  ngOnInit(): void {
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

    this.sig = new SignaturePad(this.canvas.nativeElement);
  }

  goForward(stepper: MatStepper) {
    if (this.secondFormGroup.invalid) return;
    if (this.secondFormGroup.valid && this.sfg.isNone.value) {
      stepper.next();
      return;
    }

    //open modal
    this.isCanDeactive = true;
    this.bsModalRef = this.modalService.show(CantContinueModalComponent, {
      animated: true,
      class: 'cant-continue-modal-wrapper',
    });
  }

  onCancel() {
    if (
      this.firstFormGroup.dirty ||
      this.secondFormGroup.dirty ||
      this.thirdFormGroup.dirty
    ) {
      confirm('There is some panding changes');
    } else {
      this.router.navigate(['/patients']);
    }
  }

  canDeactivate(): Observable<boolean> {
    if (!this.isCanDeactive) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }

    return of(true);
  }

  submit() {
    if (this.sig.isEmpty()) {
      return;
    }

    console.log(this.sig.toDataURL());

    this.isCanDeactive = true;
    this.bsModalRef = this.modalService.show(FlowCompleteModalComponent, {
      animated: true,
      ignoreBackdropClick: true,
      keyboard: false,
      class: 'flow-complete-modal-wrapper',
    });
  }

  clearSign() {
    this.sig.clear();
  }
}
