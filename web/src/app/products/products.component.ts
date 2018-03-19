import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from '../domain';
import {Discount} from '../domain';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'app';
  products: Array<Product>;
  discounts: Array<Discount>;

  constructor(private _http: Http) {
    this.getRest();
    this.getDiscounts();
    this.discounts = new Array <Discount>();
    this.products = new Array<Product>();
  }

  private getDiscounts() {
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
  }
}
