import { Component, OnInit } from '@angular/core';
import { BestelRegel } from '../../domain';
@Component({
  selector: 'winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrls: ['./winkelmand.component.css']
})
export class WinkelmandComponent implements OnInit {
  private bestelling : Array<BestelRegel> = new Array<BestelRegel>();
  private totalPrice : number = 0.0;
  constructor() {
  console.log("test") }

  ngOnInit() {
  }

  goToPayment(){
    /**
    Controlleer eerst of de afrekening kan plaatsvinden (Alle producten kunnen afgerekend worden)
    **/

    /**
    * Stuur door naar de betallings-wizard
    **/

  }
}
