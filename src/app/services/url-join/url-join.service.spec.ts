import { TestBed } from '@angular/core/testing';

import { UrlJoinService } from './url-join.service';

describe('UrlJoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlJoinService = TestBed.inject(UrlJoinService);
    expect(service).toBeTruthy();
  });
});
