import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDataComponent } from './students-data.component';

describe('StudentsDataComponent', () => {
  let component: StudentsDataComponent;
  let fixture: ComponentFixture<StudentsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
