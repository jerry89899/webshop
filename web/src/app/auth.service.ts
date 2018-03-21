import { Injectable } from '@angular/core';
import { Klant, Account, Adres } from './domain';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/**
* Server die het ophalen van een gebruiker "simuleert";
* Hier zou ook later een login service ingebouwd kunnen worden en een token mechanisme.
**/
@Injectable()
export class AuthService {
  private url : string = "http://localhost";
  private port: string = "9090";
  constructor(private _http : Http) { }

  /**
  * test data
  **/
  loadKlant() : Observable<Klant>{
/*    let klant = new Klant();
    klant.id = 1;
    klant.naam = "Tjibbe";
    let account = new Account();
    account.id = 2;
    account.openDatum = "15-03-2018";
    account.isActief = true;
    account.adresList = this.loadAddresses();
    klant.account = account;
    return klant;*/
    return this._http.get(this.url+":"+this.port+'/customers/2')
    .map(res => {
        let item = res.json();
        let klant = <Klant> item;
        return klant;
    });
  }

}
