import { Component, OnInit } from '@angular/core';
import { Adres, Account, Klant } from '../../domain';
import { AuthService } from '../../auth.service';
import {Router} from "@angular/router";
import { ResponseComponent } from '../response/response.component';
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
  constructor(
    private authService : AuthService,
    private router: Router) {
    this.loading = true;
    this.authService.getKlant().then((res : Klant) => {
      this.klant = res;
      this.addresList = this.klant.account.adresList;
      this.loading = false;

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
      this.router.navigate([{outlets: {'content': ['payment', 'response']}}]);
    });
  }
}
