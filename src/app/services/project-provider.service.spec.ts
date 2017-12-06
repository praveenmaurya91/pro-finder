import { TestBed, inject } from '@angular/core/testing';

import { ProjectProviderService } from './project-provider.service';

describe('ProjectProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectProviderService]
    });
  });

  it('should be created', inject([ProjectProviderService], (service: ProjectProviderService) => {
    expect(service).toBeTruthy();
  }));
});
