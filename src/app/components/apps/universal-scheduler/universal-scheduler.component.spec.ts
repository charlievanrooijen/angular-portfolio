import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSchedulerComponent } from './universal-scheduler.component';

describe('UniversalSchedulerComponent', () => {
  let component: UniversalSchedulerComponent;
  let fixture: ComponentFixture<UniversalSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalSchedulerComponent]
    });
    fixture = TestBed.createComponent(UniversalSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
