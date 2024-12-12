export interface ProductModel{
  id: number;
  title: string;
  price: number;
  images: string[];
  creationAt: string;
  category: Category;
}

export interface Category{
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
