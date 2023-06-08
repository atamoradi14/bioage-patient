import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cant-continue-modal',
  templateUrl: './cant-continue-modal.component.html',
  styleUrls: ['./cant-continue-modal.component.scss'],
})
export class CantContinueModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
