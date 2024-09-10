import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://66dfa86f2fb67ac16f26cfa1.mockapi.io/products'; // Ruta al JSON

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos desde la URL
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  // Método para obtener un producto por su ID
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(p => p.id === id))
    );
  }
}
