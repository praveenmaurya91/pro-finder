import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequestDetailsComponent } from './project-request-details.component';

describe('ProjectRequestDetailsComponent', () => {
  let component: ProjectRequestDetailsComponent;
  let fixture: ComponentFixture<ProjectRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
