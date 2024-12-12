import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Este se debio crear en la carpeta shared dentro de domains

//Model
import { ProductModel } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<ProductModel[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCartService(item: ProductModel){
    const currentCart = this.cartItems.getValue();
    this.cartItems.next([...currentCart, item]);
  }
}
