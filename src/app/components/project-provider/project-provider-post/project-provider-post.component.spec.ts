import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProviderPostComponent } from './project-provider-post.component';

describe('ProjectProviderPostComponent', () => {
  let component: ProjectProviderPostComponent;
  let fixture: ComponentFixture<ProjectProviderPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProviderPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProviderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
