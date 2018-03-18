import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from '../domain';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'app';
  products: Array<Product>;

  constructor(private _http: Http) {
    this.getRest();
    this.products = new Array<Product>();
  }

  private getRest() {
    return this._http.get('http://localhost:9000/getallproducts')
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
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
