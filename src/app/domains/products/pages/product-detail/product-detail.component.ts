import { Component, inject, Input, signal } from '@angular/core';
import { CartService, ProductService } from '@services';
import { ProductModel } from '@shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<ProductModel | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next:(product)=> {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCartService(product)
    }
  }

}
