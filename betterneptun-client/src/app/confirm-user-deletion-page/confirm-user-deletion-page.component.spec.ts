import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUserDeletionPageComponent } from './confirm-user-deletion-page.component';

describe('ConfirmUserDeletionPageComponent', () => {
  let component: ConfirmUserDeletionPageComponent;
  let fixture: ComponentFixture<ConfirmUserDeletionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmUserDeletionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUserDeletionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
