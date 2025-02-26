import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorSupermercadoComponent } from './buscadorSupermercado.component';

describe('BuscadorSupermercadoComponent', () => {
  let component: BuscadorSupermercadoComponent;
  let fixture: ComponentFixture<BuscadorSupermercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscadorSupermercadoComponent] // Correcto: usar declarations en lugar de imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorSupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
