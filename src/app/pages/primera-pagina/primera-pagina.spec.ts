import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraPagina } from './primera-pagina';

describe('PrimeraPagina', () => {
  let component: PrimeraPagina;
  let fixture: ComponentFixture<PrimeraPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeraPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
