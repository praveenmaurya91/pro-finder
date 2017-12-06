import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderSignupComponent } from './project-provider-signup.component';

describe('ProjectProviderSignupComponent', () => {
  let component: ProjectProviderSignupComponent;
  let fixture: ComponentFixture<ProjectProviderSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
