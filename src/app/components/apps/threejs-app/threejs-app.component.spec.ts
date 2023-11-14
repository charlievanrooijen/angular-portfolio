import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsAppComponent } from './threejs-app.component';

describe('ThreejsAppComponent', () => {
  let component: ThreejsAppComponent;
  let fixture: ComponentFixture<ThreejsAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreejsAppComponent]
    });
    fixture = TestBed.createComponent(ThreejsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
