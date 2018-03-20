import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../domain/Categorie';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {AppDataService } from '../../app-data.service';
@Component({
  selector: 'app-categorieen',
  templateUrl: './categorieen.component.html',
  styleUrls: ['./categorieen.component.css']
})
export class CategorieenComponent {
  loading: boolean = true;
  constructor(private _http: Http, private _dataService : AppDataService) {
  //  this.getRest();
    this._dataService.loadCategories().subscribe((categories) => {
      this._dataService.setCategories(categories);
      this.loading = false;
      
      this._dataService.pushCategorySubject();

    });
  }

  /*private getRest() {
    return this._http.get('http://localhost:9090/categories')
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
  }*/
}
