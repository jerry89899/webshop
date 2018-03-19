import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Categorie} from '../domain';
import {Discount} from '../domain';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  title = 'app';
  categories: Array<Categorie>;

  constructor(private _http: Http) {
    this.getRest();
    this.categories = new Array <Categorie>();
  }
  private getRest() {
    return this._http.get('http://localhost:9000/categories')
      .map((res: Response) => res.json())
      .subscribe(data => {
        // console.log(data);
        for (let category of data) {
          let newcategory = new Categorie();
          newcategory.id = category.id;
          newcategory.naam = category.naam;
          newcategory.plaatje = category.plaatje;
          newcategory.producten = category.producten;
          newcategory.omschrijving = category.omschrijving;
          this.categories.push(newcategory);
        }
      });
  }
}
// public id: number;
// public plaatje : string;
// public naam : string = 'Geen categorie';
// public omschrijving: string;
// public producten : any;
