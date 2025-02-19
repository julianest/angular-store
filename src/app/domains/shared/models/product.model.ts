export interface ProductModel{
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  category: CategoryModel;
}

export interface CategoryModel{
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
