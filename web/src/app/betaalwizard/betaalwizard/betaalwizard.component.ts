import { Component, OnInit } from '@angular/core';
import { Adres, Account, Klant } from '../../domain';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-betaalwizard',
  templateUrl: './betaalwizard.component.html',
  styleUrls: ['./betaalwizard.component.css']
})
export class BetaalwizardComponent implements OnInit {
  private klant : Klant;
  private addresList : Array<Adres> = new Array<Adres>();
  private factuurAdres : Adres;
  private loading:boolean = false;
  private bankOpties : Array<string> = [
    "Rabobank",
    "ING"
  ];
  private geselecteerdeBank : string = this.bankOpties[0];
  constructor(private authService : AuthService) {
    this.authService.getKlant().then((res : Klant) => {
      this.klant = res;
      console.log(this.klant);
    });
    this.authService.getAddresses().then((res : Array<Adres>) => {
      this.addresList = res;
      console.log(this.addresList);
    });
  }

  ngOnInit() {
  }

  /**
  * Simuleer nu "even wachten op de server"
  **/
  checkout(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

    }, 2000);
  }
}
