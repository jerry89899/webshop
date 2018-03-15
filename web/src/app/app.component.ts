import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
        /*  let newproduct = new Product();
          newproduct.id = product.product_id;
          newproduct.naam = product.product_titel;
          newproduct.afbeelding = product.product_afbeelding;
          newproduct.prijs = product.product_prijs;
          newproduct.omschrijving = product.product_omschrijving;*/
          this.products.push(product);
        }
      });
  }
}
