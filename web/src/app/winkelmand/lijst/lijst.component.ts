import { Component, OnInit } from '@angular/core';
import { Product, BestelRegel }  from '../../domain';
@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {
  private bestelling : Array<BestelRegel>;
  constructor() {
    this.bestelling = new Array<BestelRegel>();
  }

  ngOnInit() {
  }
  addItem(){
    let regel = new BestelRegel();
    regel.aantal = 1;
    regel.product = new Product();
    this.bestelling.push(regel);
  }
  removeItem(regel:BestelRegel){
    let index = this.bestelling.indexOf(regel, 1);
    this.bestelling.splice(index);
  }
  changeItemCount(regel:BestelRegel, aantal:number){
    regel.aantal = aantal;
  }


}
