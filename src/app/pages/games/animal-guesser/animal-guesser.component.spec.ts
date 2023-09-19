import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGuesserComponent } from './animal-guesser.component';

describe('AnimalGuesserComponent', () => {
  let component: AnimalGuesserComponent;
  let fixture: ComponentFixture<AnimalGuesserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalGuesserComponent]
    });
    fixture = TestBed.createComponent(AnimalGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
