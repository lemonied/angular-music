import { TestBed } from '@angular/core/testing';

import { PlayModeService } from './play-mode.service';

describe('PlayModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayModeService = TestBed.inject(PlayModeService);
    expect(service).toBeTruthy();
  });
});
