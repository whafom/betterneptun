import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultationPageComponent } from './edit-consultation-page.component';

describe('EditConsultationPageComponent', () => {
  let component: EditConsultationPageComponent;
  let fixture: ComponentFixture<EditConsultationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConsultationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsultationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
