import { TestBed, inject } from '@angular/core/testing';

import { PopulationRegisterService } from './population-register.service';

describe('PopulationRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationRegisterService]
    });
  });

  it('should be created', inject([PopulationRegisterService], (service: PopulationRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
