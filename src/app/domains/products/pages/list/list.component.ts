import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services
import { CartService, ProductService } from '@services';

//Components
import {ProductComponent } from '@products'
import {HeaderComponent} from '@shared';

//Model
import { ProductModel } from '@shared';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 //@Output() url: Product;
  products = signal<ProductModel[]>([]);
  cartFromList = signal<ProductModel[]>([]);

  constructor(
    private cartService: CartService, private productService: ProductService){
    const initProducts: ProductModel[] = []
    this.products.set(initProducts);
  }

  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts()
      .subscribe({
        next:(products: ProductModel[])=>{
          this.products.set(products);
    },
    error: (err)=>{
      console.error('Error en el llamado',err);
      }
    })
  }

  getRandomImage(){
    return "https://picsum.photos/500/500?r="+Math.random();
  }

  addToCartfromChild_Product(prod: ProductModel){
    //Con el servicio creado llamamos al metodo del servicio creado para actualizar directamente en el entorno global
    this.cartService.addToCartService(prod);
    }

}
