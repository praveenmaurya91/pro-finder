import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSignupComponent } from './student-signup.component';

describe('StudentSignupComponent', () => {
  let component: StudentSignupComponent;
  let fixture: ComponentFixture<StudentSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
