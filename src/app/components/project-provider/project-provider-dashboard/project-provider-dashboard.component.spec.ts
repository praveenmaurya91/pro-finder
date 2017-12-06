import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderDashboardComponent } from './project-provider-dashboard.component';

describe('ProjectProviderDashboardComponent', () => {
  let component: ProjectProviderDashboardComponent;
  let fixture: ComponentFixture<ProjectProviderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
