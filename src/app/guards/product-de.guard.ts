import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../product/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDeGuard implements CanDeactivate<AddProductComponent> {
  canDeactivate(component: AddProductComponent,currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot)
  {
    return component.canExit();
  }
  
}
