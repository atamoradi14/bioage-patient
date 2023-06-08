import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCompleteModalComponent } from './flow-complete-modal.component';

describe('FlowCompleteModalComponent', () => {
  let component: FlowCompleteModalComponent;
  let fixture: ComponentFixture<FlowCompleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCompleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowCompleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
