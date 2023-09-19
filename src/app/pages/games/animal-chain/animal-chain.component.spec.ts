import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalChainComponent } from './animal-chain.component';

describe('AnimalChainComponent', () => {
  let component: AnimalChainComponent;
  let fixture: ComponentFixture<AnimalChainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalChainComponent]
    });
    fixture = TestBed.createComponent(AnimalChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
