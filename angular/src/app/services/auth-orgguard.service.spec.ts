import { TestBed, inject } from '@angular/core/testing';

import { AuthOrgguardService } from './auth-orgguard.service';

describe('AuthOrgguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthOrgguardService]
    });
  });

  it('should be created', inject([AuthOrgguardService], (service: AuthOrgguardService) => {
    expect(service).toBeTruthy();
  }));
});
