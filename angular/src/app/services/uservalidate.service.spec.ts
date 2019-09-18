import { TestBed, inject } from '@angular/core/testing';

import { UservalidateService } from './uservalidate.service';

describe('UservalidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UservalidateService]
    });
  });

  it('should be created', inject([UservalidateService], (service: UservalidateService) => {
    expect(service).toBeTruthy();
  }));
});
