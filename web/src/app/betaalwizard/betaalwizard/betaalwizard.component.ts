import { Component, OnInit } from '@angular/core';
import { Adres, Account, Klant } from '../../domain';

@Component({
  selector: 'app-betaalwizard',
  templateUrl: './betaalwizard.component.html',
  styleUrls: ['./betaalwizard.component.css']
})
export class BetaalwizardComponent implements OnInit {
  private klant : Klant;
  private addresList : Array<Adres> = new Array<Adres>();
  private factuurAdres : Adres;
  constructor() {
    this.loadKlant();
    this.loadAddresses();
  }

  ngOnInit() {
  }
  loadKlant(){
    let klant = new Klant();
    klant.id = 1;
    klant.naam = "Tjibbe";
    this.klant = klant;
    let account = new Account();
    account.id = 2;
    account.openDatum = "15-03-2018";
    account.isActief = true;
    this.klant.account = account;
  }
  loadAddresses(){
    let adres1 = new Adres();
    adres1.straat = "Warande";
    adres1.straatNummer = 34;
    adres1.id = 1;
    let adres2 = new Adres();
    adres2.straat = "Biltstraat";
    adres2.straatNummer = 33;
    adres2.id = 2;

    this.addresList.push(adres1);
    this.addresList.push(adres2);
    this.factuurAdres = adres1;
  }
}
