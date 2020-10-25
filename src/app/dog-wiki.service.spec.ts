import { TestBed } from '@angular/core/testing';

import { DogWikiService } from './dog-wiki.service';

describe('DogWikiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogWikiService = TestBed.get(DogWikiService);
    expect(service).toBeTruthy();
  });
});
