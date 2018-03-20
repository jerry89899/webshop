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
import { LoadingModule } from 'ngx-loading';
import { AuthService } from './auth.service';
import { AppDataService } from './app-data.service';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductsComponent,
    CategorieenComponent,
    HomepageComponent
  ],
  imports: [
    HttpModule,
    NgbModule.forRoot(),
    BrowserModule,
    WinkelmandModule,
    BetaalwizardModule,
    AppRoutingModule,
    LoadingModule
  ],
  providers: [AuthService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
