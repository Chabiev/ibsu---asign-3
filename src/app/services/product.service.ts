import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  addProduct(product: any) {
    let products: any[] = JSON.parse(localStorage.getItem('products')!) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }

  saveProductsToLocalstorage() {
    // This method is now called directly from onSubmit to save the entire product array.
    const products = JSON.stringify(this.getAllProducts());
    localStorage.setItem('products', products);
  }

  getAllProducts(): any[] {
    // Fetch the existing products from localStorage.
    return JSON.parse(localStorage.getItem('products')!) || [];
  }
  
}
