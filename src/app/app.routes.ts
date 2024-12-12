import { Routes } from '@angular/router';

//Components
import { ListComponent } from './domains/products/pages/list/list.component'
import { AboutComponent } from './domains/info/pages/about/about.component';
import { PaymentsComponent } from './domains/info/pages/payments/payments.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  }



];
