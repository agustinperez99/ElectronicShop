import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Bienvenido a la tienda de productos electrónicos</h2>
<div class="product-container">
  <div class="product-card" *ngFor="let product of products">
    <img [src]="product.imageUrl" alt="{{ product.name }}" class="product-image" />
    <div class="product-content">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price | currency }}</p>
      <a [routerLink]="['/product-detail', product.id]">Ver Detalles</a>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
