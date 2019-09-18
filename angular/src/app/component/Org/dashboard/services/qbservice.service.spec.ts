import { TestBed, inject } from '@angular/core/testing';

import { QbserviceService } from './qbservice.service';

describe('QbserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QbserviceService]
    });
  });

  it('should be created', inject([QbserviceService], (service: QbserviceService) => {
    expect(service).toBeTruthy();
  }));
});
