import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy{
  
  constructor(private prodService: ProductService, private router: Router){}
  products: any[] = [];

  ngOnInit(): void {

    console.log(JSON.parse(localStorage.getItem('products') || '[]'));
    this.getProducts();
  }

  ngOnDestroy() {
    // Revoke object URLs to prevent memory leaks
    this.products.forEach(product => {
      if (product.picture instanceof File) {
        URL.revokeObjectURL(product.picture);
      }
    });
  }
  getProducts() {
    this.products = this.prodService.getAllProducts();
  }

  goToAddProducts(){
    this.router.navigate(['product/add-product']);
  }
}
