export interface ProductResponse {
  success: boolean;
  message: string;
  data: Product[];
  queryGeneratedTime: number;
}

interface ProductVariation {
  size: string;
  price: number | null | string;
}

export interface Product {
  id: number;
  product_uuid: string;
  product_name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
  category_name: string;
  store_id: number;
  user_id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  variations: ProductVariation[];
}
