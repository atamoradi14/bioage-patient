import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-flow-complete-modal',
  templateUrl: './flow-complete-modal.component.html',
  styleUrls: ['./flow-complete-modal.component.scss'],
})
export class FlowCompleteModalComponent {

  constructor(public bsModalRef: BsModalRef) {}

  onCompleteClick() {
    //to do
    //handle complete logic. Its better to do the logic in parent component
  }
}
