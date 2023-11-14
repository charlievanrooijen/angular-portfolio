import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyThreePlusOneComponent } from './twenty-three-plus-one.component';

describe('TwentyThreePlusOneComponent', () => {
  let component: TwentyThreePlusOneComponent;
  let fixture: ComponentFixture<TwentyThreePlusOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwentyThreePlusOneComponent]
    });
    fixture = TestBed.createComponent(TwentyThreePlusOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
