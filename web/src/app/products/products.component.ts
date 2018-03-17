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
    return this._http.get('https://jerrylooman.nl/restservice/')
      .map((res: Response) => res.json())
      .subscribe(data => {
        for (let product of data) {

          this.products.push(product);
          
        }
      });
  }
}
