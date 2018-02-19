import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrls: ['./winkelmand.component.css']
})
export class WinkelmandComponent implements OnInit {

  constructor() { }

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
