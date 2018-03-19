import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../domain/Categorie';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-categorieen',
  templateUrl: './categorieen.component.html',
  styleUrls: ['./categorieen.component.css']
})
export class CategorieenComponent {
  categories: Array<Categorie>;

  constructor(private _http: Http) {
    this.getRest();
    this.categories = new Array<Categorie>();
  }
  private getRest() {
    return this._http.get('http://localhost:9000/categories')
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
        for (const categorie of data) {
          const newcategorie = new Categorie();
          newcategorie.id = categorie.id;
          newcategorie.naam = categorie.naam;
          newcategorie.plaatje = categorie.plaatje;
          newcategorie.omschrijving = categorie.omschrijving;
          this.categories.push(newcategorie);
        }
      });
  }
}
