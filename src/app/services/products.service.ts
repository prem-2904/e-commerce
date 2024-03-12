import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_BASE = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${API_BASE}/products/categories`);
  }

  getProducts() {
    return this.http.get(`${API_BASE}/products`);
  }

  getProductById(productId: number) {
    return this.http.get(`${API_BASE}/products/${productId}`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(
      `${API_BASE}/products/category/${category.toString()}`
    );
  }
}
