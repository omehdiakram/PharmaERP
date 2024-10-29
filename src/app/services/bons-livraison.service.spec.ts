import { TestBed } from '@angular/core/testing';

import { BonsLivraisonService } from './bons-livraison.service';

describe('BonsLivraisonService', () => {
  let service: BonsLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonsLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
