import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  private categoryURL = 'https://api.escuelajs.co/api/v1/categories';

  constructor() { }

  getAll(){
    return this.http.get<CategoryModel[]>(this.categoryURL);
  }
}
