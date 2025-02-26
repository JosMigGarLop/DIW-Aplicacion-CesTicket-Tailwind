import { Routes } from '@angular/router';
import { BuscadorSupermercadoComponent } from './paginas/buscadorSupermercado/buscadorSupermercado.component';
import { ProductosBaratosComponent } from './paginas/productosBaratos/productosBaratos.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

export const routes: Routes = [
    {
        path: '', 
        component: InicioComponent,
    },
    {
        path: 'buscadorSupermercado',
        component: BuscadorSupermercadoComponent,
    },
    {
        path: 'productosBaratos',
        component: ProductosBaratosComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
