import { Routes } from '@angular/router';

//Components
import { AboutComponent } from './domains/info/pages/about/about.component';
import { PaymentsComponent, NotFoundComponent } from '@info';
import { LayoutComponent } from '@shared';

import { ProductDetailComponent } from '@products'

//Revisar aqui lo de las paginas porque al parecer no funciona el resumen
//de rutas con las paginas ya que si pongo aboutComponente en el info no lo encuentra

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component')
        //antes: component: ListComponent con component se trae de forma normal
        //con loadCOmponent trae por chunks, es decir trae unicamnte el componente
        //cuanod lo requiere y no todo trae todo al mismo tiempo.
        // y como este import es dinamico y es una promesa, entonces toca terminarlo con .then()
        // Sin embargo si vamos a nuestro componente listcomponent y le ponemos export default nos ahorramos ese then
        // aunque esto mejora en forma de chunks cuando pasamos a otro componente y simulamos una red lenta este va a demorar en generar
        // la descarga del mismo pues el debe construir el chunk que no genero anteriormente en la carga inicial
        //podemos usar una tecnica que se llama preficiente, que hace que aproveche el tiempo muerto para que valla recargando eso que hace falta,
        // para ello vamos al app.cofig.ts y ponemos withPreloading.
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      }
    ]
  }, //De esta forma creamos vistas anidadas, es decir nos preocupamos solo por el contenido ya que el layout genera sus hijos que contiene
  //las otras vistas, entonces si voy a hacer alguna modificacion de la vista genera seria desde el layout principal.
  //Lo que no este dentro de los hijos del Layout no va a compartir ese comportamiento como por ejemplo el not-found.
  // {
  //   path: '',
  //   component: ListComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }



];
