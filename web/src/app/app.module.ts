import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WinkelmandModule } from './winkelmand/winkelmand.module';
import {BetaalwizardModule } from './betaalwizard/betaalwizard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { CategorieenComponent } from './sidebar/categorieen/categorieen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductsComponent,
    CategorieenComponent
  ],
  imports: [
    HttpModule,
    NgbModule.forRoot(),
    BrowserModule,
    WinkelmandModule,
    BetaalwizardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
