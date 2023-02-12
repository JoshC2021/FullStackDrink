import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDrinkListComponent } from './fav-drink-list.component';

describe('FavDrinkListComponent', () => {
  let component: FavDrinkListComponent;
  let fixture: ComponentFixture<FavDrinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavDrinkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavDrinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
