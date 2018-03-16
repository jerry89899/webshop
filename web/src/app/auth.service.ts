import { Injectable } from '@angular/core';
import { Klant, Account, Adres } from './domain';
/**
* Server die het ophalen van een gebruiker "simuleert";
* Hier zou ook later een login service ingebouwd kunnen worden en een token mechanisme.
**/
@Injectable()
export class AuthService {

  constructor() { }
  getKlant(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loadKlant());
      }, 2000)
    });
    return promise;
  }
  getAddresses(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.getAddresses());
      }, 2000)
    });
    return promise;
  }
  /**
  * test data
  **/
  loadKlant() : Klant{
    let klant = new Klant();
    klant.id = 1;
    klant.naam = "Tjibbe";
    let account = new Account();
    account.id = 2;
    account.openDatum = "15-03-2018";
    account.isActief = true;
    klant.account = account;
    return klant;
  }
  loadAddresses() : Array<Adres>{
    let adressList : Array<Adres> = new Array<Adres>();
    let adres1 = new Adres();
    adres1.straat = "Warande";
    adres1.straatNummer = 34;
    adres1.id = 1;
    let adres2 = new Adres();
    adres2.straat = "Biltstraat";
    adres2.straatNummer = 33;
    adres2.id = 2;

    adressList.push(adres1);
    adressList.push(adres2);
    return adressList;
  }
}
