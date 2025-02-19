import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services
import { CartService, CategoryService, ProductService } from '@services';

//Components
import {ProductComponent } from '@products'
import {HeaderComponent} from '@shared';

//Model
import { ProductModel, CategoryModel } from '@shared';

//ROuter
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
 //@Output() url: Product;
  products = signal<ProductModel[]>([]);
  cartFromList = signal<ProductModel[]>([]);
  categories = signal<CategoryModel[]>([]);
  private readonly categoryService= inject(CategoryService);
  @Input() category_id?:string;

  constructor(
    private readonly cartService: CartService, private readonly productService: ProductService){
    const initProducts: ProductModel[] = []
    this.products.set(initProducts);
  }

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    this.getProducts()

  }

  getProducts(){
    this.productService.getProducts(this.category_id)
      .subscribe({
        next:(products: ProductModel[])=>{
          this.products.set(products);
    },
    error: (err)=>{
      console.error('Error en el llamado',err);
      }
    })
  }

  getCategories(){
    this.categoryService.getAll()
      .subscribe({
        next:(data: CategoryModel[])=>{
          this.categories.set(data);
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
