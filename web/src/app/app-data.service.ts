import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpResponse } from '@angular/common/http';
import { Product, Categorie, Discount} from './domain';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppDataService {
  private url : string = "http://localhost";
  private port: string = "9090";
  private categorySubject = new Subject<any>();
  private categories : Array<Categorie> = new Array<Categorie>();
  private discounts : Array<Discount> = new Array<Discount>();
  constructor(private _http : Http) { }

  private _loadData(directory : string){
  }
  getCategorySubject(){
    return this.categorySubject.asObservable();
  }
  pushCategorySubject(){
    this.categorySubject.next();
  }
  loadCategories(): Observable<Categorie[]>{
    return this._http.get(this.url+":"+this.port+'/categories')
    .map(res => {
        return res.json().map(item => {
          let category = <Categorie> item;
          return category;
        });
      });

  }
  loadDiscounts() : Observable<Discount[]>{
    return this._http.get(this.url+":"+this.port+'/discounts')
    .map(res => {
        return res.json().map(item => {
          let discount = <Discount> item;
          return discount;
        });
      });
  }
  loadProduct(productId: number) : Observable<Product> {
    return this._http.get(this.url+":"+this.port+'/products/'+productId)
    .map(res => {
        let item = res.json();
        let product = <Product> item;
        return product;

      });
  }

  setDiscounts(discounts : Array<Discount>) {
    this.discounts = discounts;
  }
  getDiscounts() {
    return this.discounts;
  }
  setCategories(categories : Array<Categorie>){
    this.categories = categories;
  }
  getCategories(){
    return this.categories;
  }
  private _getCategoryById(categoryId : number){
    let categoryById = this.categories.filter(category => category.id == categoryId);
    return categoryById[0];

  }
  getProductsByCategory(categoryId : number) : Array<Product>{
    return this._getCategoryById(categoryId).producten;
  }

}
