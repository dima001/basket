import { TestBed, inject } from '@angular/core/testing';

import { TacticService } from './tactic.service';

describe('TacticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacticService]
    });
  });

  it('should be created', inject([TacticService], (service: TacticService) => {
    expect(service).toBeTruthy();
  }));
});
