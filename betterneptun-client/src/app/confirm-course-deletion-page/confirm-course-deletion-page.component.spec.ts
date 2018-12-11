import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCourseDeletionPageComponent } from './confirm-course-deletion-page.component';

describe('ConfirmCourseDeletionPageComponent', () => {
  let component: ConfirmCourseDeletionPageComponent;
  let fixture: ComponentFixture<ConfirmCourseDeletionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCourseDeletionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCourseDeletionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
