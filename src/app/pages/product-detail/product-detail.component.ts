import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
     <h2>{{ product?.name }}</h2>
    <img [src]="product?.imageUrl" alt="{{ product?.name }}" />
    <p>{{ product?.description }}</p>
    <p>Price: {{ product?.price | currency }}</p>
    <p>Category: {{ product?.category }}</p>
    <a class="button" routerLink="/home">Volver al inicio</a>
  `,
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    if (productId) {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    } else {
      console.error('Invalid product ID');
    }
  }
}
