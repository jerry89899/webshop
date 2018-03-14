import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {ProductsComponent} from './products/products.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'product',
        component: ProductdetailComponent,
      },
      {
        path: '',
        component: ProductsComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
