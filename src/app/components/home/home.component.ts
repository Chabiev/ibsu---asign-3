import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){

  }

  goToProducts(){
    this.router.navigate(['product/products']);
  }

  goToAddProducts(){
    this.router.navigate(['product/add-product']);
  }

}
