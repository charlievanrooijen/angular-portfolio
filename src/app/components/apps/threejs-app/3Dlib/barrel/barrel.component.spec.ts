import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrelComponent } from './barrel.component';

describe('BarrelComponent', () => {
  let component: BarrelComponent;
  let fixture: ComponentFixture<BarrelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrelComponent]
    });
    fixture = TestBed.createComponent(BarrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
