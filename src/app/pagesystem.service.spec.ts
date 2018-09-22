import { TestBed } from '@angular/core/testing';

import { PagesystemService } from './pagesystem.service';

describe('PagesystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesystemService = TestBed.get(PagesystemService);
    expect(service).toBeTruthy();
  });
});
