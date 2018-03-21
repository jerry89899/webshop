import { Component, OnInit } from '@angular/core';
import { Adres, Account, Klant } from '../../domain';
import { AuthService } from '../../auth.service';
import {Router} from "@angular/router";
import { ResponseComponent } from '../response/response.component';
import { SOAPService, Client } from 'ngx-soap';
import { Http } from '@angular/http';

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

  private client: Client;
  private geselecteerdeBank : string = this.bankOpties[0];
  constructor(
    private authService : AuthService,
    private router: Router, private _http : Http, private soap : SOAPService) {
    this.loading = true;
    this.authService.loadKlant().subscribe((klant) => {
      this.klant = klant;
      this.loading = false;
      this.factuurAdres = klant.woonAdres;
      this.addresList.push(klant.woonAdres);
      /*this.klant = res;
      this.addresList = this.klant.account.adresList;
      this.loading = false;
      */
    });

  }

  ngOnInit() {
  }
  makePayment() {
    let wsdlUrl = "assets/payment.wsdl";
    let paymentUrl = "https://payment-soap.herokuapp.com/ws";
    let body = {
      klantnaam: "test",
      klantadres: "test2"
    };
    this._http.get(wsdlUrl).subscribe(response => {
      if (response && response.text()) {
        this.soap.createClient(response.text()).then((client: Client) => {
          this.client = client;
          this.client.operation('getPayment', body)
          .then(payment => {
            if(payment.error) {
              console.log('Operation error', payment.error);
              return;
            }

            this._http.post("https://payment-soap.herokuapp.com:443/ws", payment.xml, { headers: payment.headers }).subscribe(
              response => {
                let xmlResponse = response.text();
                let jsonResponse = this.client.parseResponseBody(response.text());
                try {
                    console.log(jsonResponse);
                } catch (error) {
                  console.log(error);

                }
              },
              err => {
                console.log("Error calling ws", err);

              }
            );
          })
          .catch(err => {
            console.log('Error', err);

          }
          );
        });
      }
    });
  }
  /**
  * Simuleer nu "even wachten op de server"
  **/
  checkout(){
    this.makePayment();

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate([{outlets: {'content': ['payment', 'response']}}]);
    }, 30000);
  }
}
