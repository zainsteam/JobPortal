import { TestBed, inject } from '@angular/core/testing';

import { AuthorgguardService } from './authorgguard.service';

describe('AuthorgguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorgguardService]
    });
  });

  it('should be created', inject([AuthorgguardService], (service: AuthorgguardService) => {
    expect(service).toBeTruthy();
  }));
});
