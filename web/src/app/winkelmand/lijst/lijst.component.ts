import { Component, OnInit } from '@angular/core';
import { Product, BestelRegel }  from '../../domain';
@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {
  private bestelling : Array<BestelRegel>;
  constructor() { }

  ngOnInit() {
  }
  addItem(regel:BestelRegel){
    this.bestelling.push(regel);
  }
  removeItem(regel:BestelRegel){
    let index = this.bestelling.indexOf(regel, 1);
    this.bestelling.splice(index);
  }
  changeItemCount(regel:BestelRegel, aantal:number){
    regel.aantal = aantal;
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
