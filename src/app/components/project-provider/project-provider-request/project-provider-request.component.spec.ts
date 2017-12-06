import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderRequestComponent } from './project-provider-request.component';

describe('ProjectProviderRequestComponent', () => {
  let component: ProjectProviderRequestComponent;
  let fixture: ComponentFixture<ProjectProviderRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
