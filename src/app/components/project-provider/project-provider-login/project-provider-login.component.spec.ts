import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderLoginComponent } from './project-provider-login.component';

describe('ProjectProviderLoginComponent', () => {
  let component: ProjectProviderLoginComponent;
  let fixture: ComponentFixture<ProjectProviderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
