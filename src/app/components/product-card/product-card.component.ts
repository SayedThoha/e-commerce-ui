import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from '../../models/product';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  apiUrl = 'https://api.pw.wintpay.com/api/v1/store/get-products-by-store/12';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get<ProductResponse>(this.apiUrl).subscribe((res) => {
      console.log(res.data);

      this.products = res.data.slice(0, 9);
    });
  }
}
