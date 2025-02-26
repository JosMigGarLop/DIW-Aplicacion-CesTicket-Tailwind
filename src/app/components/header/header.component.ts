import { ChangeDetectorRef, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleThemeComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Cambié `styleUrl` por `styleUrls` para corregir la sintaxis
})
export class HeaderComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  // Referencias para el menú móvil
  @ViewChild('desplegableMovil', { static: false }) hamburguesa!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuMovil', { static: false }) mobileMenu!: ElementRef<HTMLElement>;
  @ViewChild('iconoMenu', { static: false }) iconoMenu!: ElementRef<SVGElement>;
  @ViewChild('cerrarMenu', { static: false }) cerrarMenu!: ElementRef<SVGElement>;

  ngAfterViewInit(): void {
    // Forzamos la detección de cambios
    this.cdr.detectChanges();

    // Verificamos si las referencias existen antes de usarlas
    if (!this.hamburguesa || !this.mobileMenu || !this.iconoMenu || !this.cerrarMenu) {
      console.error("Error: No se encontraron los elementos del menú.");
      return;
    }
  }

  // Método para desplegar/ocultar el menú móvil
  desplegar(): void {
    if (!this.mobileMenu || !this.iconoMenu || !this.cerrarMenu) {
      console.error("Error: No se encontraron los elementos para desplegar el menú.");
      return;
    }
  
    console.log("Desplegando menú...");
    
    // Alternamos la visibilidad correctamente
    const menu = this.mobileMenu.nativeElement;
    const iconoAbrir = this.iconoMenu.nativeElement;
    const iconoCerrar = this.cerrarMenu.nativeElement;
  
    // Desplegar o ocultar el menú
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('flex');  // Importante para que el flexbox funcione en móviles
      iconoAbrir.classList.add('hidden');
      iconoCerrar.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      iconoAbrir.classList.remove('hidden');
      iconoCerrar.classList.add('hidden');
    }
  }

  // Métodos de navegación
  home() {
    this.router.navigate(['/']);
  }

  Buscador() {
    this.router.navigate(['/buscadorSupermercado']);
  }

  Productos() {
    this.router.navigate(['/productosBaratos']);
  }

  register() {
    this.router.navigate(['/registro']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
