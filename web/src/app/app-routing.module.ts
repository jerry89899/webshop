import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {ProductsComponent} from './products/products.component';
import { BetaalwizardComponent} from './betaalwizard/betaalwizard/betaalwizard.component';
import { DefaultComponent } from './betaalwizard/sidebar/default/default.component';

import { CategorieenComponent } from './sidebar/categorieen/categorieen.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'product/:id',
        component: ProductdetailComponent,
        outlet: 'content'
      },
      {
        path: '',
        component: ProductsComponent,
        outlet: 'content'
      },
      {
        path: 'payment',
        component: BetaalwizardComponent,
        outlet: 'content'
      },
      {
        path: 'payment',
        component: DefaultComponent,
        outlet: 'sidebar'
      },
      {
        path: '',
        component: CategorieenComponent,
        outlet: 'sidebar'
      },

    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
