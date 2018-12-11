import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmConsultationDeletionPageComponent } from './confirm-consultation-deletion-page.component';

describe('ConfirmConsultationDeletionPageComponent', () => {
  let component: ConfirmConsultationDeletionPageComponent;
  let fixture: ComponentFixture<ConfirmConsultationDeletionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmConsultationDeletionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmConsultationDeletionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
