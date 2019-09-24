import { TestBed } from '@angular/core/testing';

import { ChangeNavigationService } from './change-navigation.service';

describe('ChangeNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeNavigationService = TestBed.get(ChangeNavigationService);
    expect(service).toBeTruthy();
  });
});
