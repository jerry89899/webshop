import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Categorie} from './domain/Categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories: Array<Categorie>;

  constructor(private _http: Http) {
    this.getRest();
    this.categories = new Array<Categorie>();
  }
  private getRest() {
    return this._http.get('http://localhost:9000/getallcategories')
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
