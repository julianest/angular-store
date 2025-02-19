import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

//Model
import { ProductModel } from '@shared';

//Pipes
import { ReversePipe, TimeAgoPipe } from '@shared';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  // Como ahora le vamos a pasar todo el objeto para que el pueda sacarlo directamente desde el html
  //le pasamos solo uno.
  // @Input({required:true}) img: string = '';
  // @Input() price: number = 0;
  // @Input() title: string = '';

  @Input({required:true}) product!: ProductModel;
  @Output() addtoCartFromProduct = new EventEmitter();

  addToCartHandler(){
    //console.log('click from child');
    // this.addtoCart.emit('Este msg es desde el hijo' + this.product.title);
    this.addtoCartFromProduct.emit(this.product);
  }

}
