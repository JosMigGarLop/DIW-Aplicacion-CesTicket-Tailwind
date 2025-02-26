import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBaratosComponent } from './productosBaratos.component';

describe('ProductosBaratosComponent', () => {
  let component: ProductosBaratosComponent;
  let fixture: ComponentFixture<ProductosBaratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosBaratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosBaratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
