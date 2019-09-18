import { TestBed, inject } from '@angular/core/testing';

import { OrgauthService } from './orgauth.service.service';

describe('Orgauth.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgauthService]
    });
  });

  it('should be created', inject([OrgauthService], (service: OrgauthService) => {
    expect(service).toBeTruthy();
  }));
});
