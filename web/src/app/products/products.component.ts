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

/*  private getDiscounts() {
    return this._http.get('http://localhost:9000/discounts')
      .map((res: Response) => res.json())
      .subscribe(data => {
        for (let discount of data) {
          let newdiscount = new Discount();
          newdiscount.id = discount.id;
          newdiscount.naam = discount.naam;
          newdiscount.plaatje = discount.plaatje;
          newdiscount.prijs = discount.prijs;
          newdiscount.omschrijving = discount.omschrijving;
          this.products.push(newdiscount);
        }
      });
  }
  private getRest() {
    return this._http.get('http://localhost:9000/products')
      .map((res: Response) => res.json())
      .subscribe(data => {
        // console.log(data);
        for (let product of data) {
          let newproduct = new Product();
          newproduct.id = product.id;
          newproduct.naam = product.naam;
          newproduct.plaatje = product.plaatje;
          newproduct.prijs = product.prijs;
          newproduct.omschrijving = product.omschrijving;
          this.products.push(newproduct);
        }
      });
  }*/
}
