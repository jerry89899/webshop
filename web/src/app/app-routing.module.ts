import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {ProductsComponent} from './products/products.component';
import { BetaalwizardComponent} from './betaalwizard/betaalwizard/betaalwizard.component';
import { DefaultComponent } from './betaalwizard/sidebar/default/default.component';
import { ResponseComponent } from './betaalwizard/response/response.component';
import { CategorieenComponent } from './sidebar/categorieen/categorieen.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'product/:id',
        component: ProductdetailComponent,
        outlet: 'content'
      },
      {
        path: 'categories/:id',
        component: ProductsComponent,
        outlet: 'content'
      },
      {
        path: '',
        component: HomepageComponent,
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
        path: 'payment/response',
        component: ResponseComponent,
        outlet: 'content'
      },
      {
        path: 'payment/response',
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
