import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDeGuard } from '../guards/product-de.guard';

const routes: Routes = [
  {path: 'add-product', component: AddProductComponent, canDeactivate:[ProductDeGuard]},
  {path: 'products', component: ProductDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
