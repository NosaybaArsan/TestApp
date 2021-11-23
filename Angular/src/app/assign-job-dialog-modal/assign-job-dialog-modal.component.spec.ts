import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignJobDialogModalComponent } from './assign-job-dialog-modal.component';

describe('AssignJobDialogModalComponent', () => {
  let component: AssignJobDialogModalComponent;
  let fixture: ComponentFixture<AssignJobDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignJobDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignJobDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
