import { Component,Input,signal,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

//Models
import { ProductModel } from '@shared';
//Components
import { SideMenuComponent } from '../side-menu/side-menu.component';
//Service
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideMenuComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(false);
  cartFromSideMenu: ProductModel[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.cartItems$.subscribe((items)=>{
      this.cartFromSideMenu = items;
    })
  }

  toogleSideMenu(changeSideMenu: boolean) {
    this.hideSideMenu.set(changeSideMenu);
    //this.hideSideMenu.update(prevState => !prevState) ;
    // console.log('hidesideMenu (padre): ' +this.hideSideMenu());
  }



}
