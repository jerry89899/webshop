import { Component, OnInit, AfterViewInit, ViewChild ,ElementRef} from '@angular/core';
import { BestelRegel } from '../../domain';
@Component({
  selector: 'winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrls: ['./winkelmand.component.css']
})
export class WinkelmandComponent implements OnInit, AfterViewInit  {
  private bestelling : Array<BestelRegel> = new Array<BestelRegel>();
  private totalPrice : number = 0.0;
  constructor() {
    console.log("test") 
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
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
