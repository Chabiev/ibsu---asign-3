import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private fb: FormBuilder, private prodService: ProductService,private router: Router) {}

  productForm!: FormGroup;
  newIsSaved!: boolean;

  ngOnInit(): void {
    this.newIsSaved = false;
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.prodService.addProduct(newProduct);
      this.prodService.saveProductsToLocalstorage(); 
      this.newIsSaved = true;
    }

  }

  canExit(){
    if(!this.newIsSaved){
      return window.confirm('You have unsaved changes. Do you really want to discard this change?');
      
    }else{
      return true;
    }
  }

  goToProducts(){
    this.router.navigate(['product/products']);
  }


}
