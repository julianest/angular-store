import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

//Models
import { ProductModel } from '@shared';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl= new URL('https://api.escuelajs.co/api/v1/products');
  private readonly http = inject(HttpClient);

  constructor() {}

  getProducts(category_id?: string ): Observable<ProductModel[]>{
    category_id && this.apiUrl.searchParams.set('categoryId', category_id) ;
    return this.http.get<ProductModel[]>(String(this.apiUrl)).pipe(
      map(products => products.map(product => ({
        ...product,
        images: product.images.map(image => this.cleanImageUrl(image)),
        category:{
          ...product.category,
          image: this.cleanImageUrl(product.category.image)
        }
      })))
    );
  }

  private cleanImageUrl(url: string): string{
    return url.replace(/[\[\]\\\"']/g, '').split('?')[0].trim();
  }

  getOne(id: string){
    return this.http.get<ProductModel>(this.apiUrl +'/'+ id);
  }



}

