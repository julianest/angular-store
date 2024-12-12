import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { HeaderComponent } from './domains/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html', //En este caso como tenemos en app componente solo el routeroutlet y es tan pequeño podemos hacer lo de la siguiente linea esto para obviar lo demas.
  template:'<router-outlet/>',
  //template:'<app-header/>     <router-outlet/>',
  // styleUrl: './app.component.css'  //este tambien lo podemos sacar
  //de esta forma eliminamos el app.component.css y el app. y el app.component.html
})
export class AppComponent {
  title = 'angularStore';
}
