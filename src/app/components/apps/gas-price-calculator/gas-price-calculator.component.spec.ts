import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPriceCalculatorComponent } from './gas-price-calculator.component';

describe('GasPriceCalculatorComponent', () => {
  let component: GasPriceCalculatorComponent;
  let fixture: ComponentFixture<GasPriceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasPriceCalculatorComponent]
    });
    fixture = TestBed.createComponent(GasPriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
