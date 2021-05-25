import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTyleComponent } from './city-tyle.component';

describe('CityTyleComponent', () => {
  let component: CityTyleComponent;
  let fixture: ComponentFixture<CityTyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
