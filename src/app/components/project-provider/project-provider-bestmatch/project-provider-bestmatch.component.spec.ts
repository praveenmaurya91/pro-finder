import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderBestmatchComponent } from './project-provider-bestmatch.component';

describe('ProjectProviderBestmatchComponent', () => {
  let component: ProjectProviderBestmatchComponent;
  let fixture: ComponentFixture<ProjectProviderBestmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderBestmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderBestmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
