import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantContinueModalComponent } from './cant-continue-modal.component';

describe('CantContinueModalComponent', () => {
  let component: CantContinueModalComponent;
  let fixture: ComponentFixture<CantContinueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantContinueModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantContinueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
