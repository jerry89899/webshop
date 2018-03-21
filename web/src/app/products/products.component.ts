import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product, Discount} from '../domain';
import { AppDataService } from '../app-data.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'app';
  private categoryId : number;
  private products : Array<any> = new Array<any>();
  constructor(private _http: Http,
    private _dataService: AppDataService,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.categoryId = params.id;
      if(this._dataService.getCategories().length > 0){
        this.products = _dataService.getProductsByCategory(this.categoryId);
      }
    });
    _dataService.getCategorySubject().subscribe(() => {
      this.products = _dataService.getProductsByCategory(this.categoryId);
    });
    //this.products = _dataService.getProductsByCategory();
    //console.log(this.products);
  }
}
