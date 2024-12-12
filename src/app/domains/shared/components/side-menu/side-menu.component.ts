import { Component,EventEmitter,Input,Output,signal,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services
import { CartService } from '../../../../services/cart.service';
//Models
import { ProductModel } from '@shared';
//Components
import { PaymentsComponent } from '../../../info/pages/payments/payments.component';
//Routes
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule,RouterLink, PaymentsComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  @Input() fromParenthideSideMenu!: boolean;
  hideSideMenuInChild: boolean = this.fromParenthideSideMenu;
  @Output() fromChildHideSideMenu = new EventEmitter();
  cartItems: ProductModel[] = [];
  total = signal(0);

  constructor(private cartService: CartService){}

  ngOnInit(){
    console.log("onInit: ");
    //Suscribete al carrito para recibir actualizaciones
    this.cartService.cartItems$.subscribe((items)=>{
      this.cartItems = items;
      //console.log('onInit'+ this.cartItems.length);
      this.total.set(this.calcTotal());
    })


  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fromParenthideSideMenu']) {
    console.log('fromParenthideSideMenu: (hijo)', changes['fromParenthideSideMenu'].currentValue);
    }
  } //aula multiple debajo la biblioteca.

  toogleSideMenuHandler(value: boolean) {
    this.hideSideMenuInChild = value;
    this.fromChildHideSideMenu.emit(value);
  }

  calcTotal() {
    console.log('calcTotal, carItems '+ this.cartItems.length);
    return this.cartItems.reduce((total,product) => total + product.price, 0 );
  }

  deleteProduct(){
    console.log('deleteProduct');

  }

}
