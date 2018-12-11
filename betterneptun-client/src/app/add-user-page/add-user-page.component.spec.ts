import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPageComponent } from './add-user-page.component';

describe('AddUserPageComponent', () => {
  let component: AddUserPageComponent;
  let fixture: ComponentFixture<AddUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
