import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnappeKoppenComponent } from './knappe-koppe.component';

describe('KnappeKoppeComponent', () => {
  let component: KnappeKoppenComponent;
  let fixture: ComponentFixture<KnappeKoppenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnappeKoppenComponent]
    });
    fixture = TestBed.createComponent(KnappeKoppenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
