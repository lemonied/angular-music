import { TestBed } from '@angular/core/testing';

import { StoresService } from './stores.service';

describe('StoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StoresService]
  }));

  it('should be created', () => {
    const service: StoresService = TestBed.inject(StoresService);
    expect(service).toBeTruthy();
  });
});
