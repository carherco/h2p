import { TestBed } from '@angular/core/testing';

import { DistanciaService } from './distancia.service';

describe('DistanciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanciaService = TestBed.get(DistanciaService);
    expect(service).toBeTruthy();
  });
});
