import { TestBed } from '@angular/core/testing';

import { FavoriteDrinkService } from './favorite-drink.service';

describe('FavoriteDrinkService', () => {
  let service: FavoriteDrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteDrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
