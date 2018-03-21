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
    //this.categories = new Array<Categorie>();
  }

}
