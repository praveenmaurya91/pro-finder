import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderDetailsComponent } from './project-provider-details.component';

describe('ProjectProviderDetailsComponent', () => {
  let component: ProjectProviderDetailsComponent;
  let fixture: ComponentFixture<ProjectProviderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
