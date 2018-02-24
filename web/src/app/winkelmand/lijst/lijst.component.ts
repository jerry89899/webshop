import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { Product, BestelRegel }  from '../../domain';
import {WinkelmandService } from '../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements DoCheck  {
  @Input('bestelling') bestelling : Array<BestelRegel>;
  subscription: Subscription;
  differ : any;
  totalPrice : number;
  constructor(private winkelmandService: WinkelmandService, differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);

    this.subscription = this.winkelmandService.getProduct().subscribe(product => {
      let regel = new BestelRegel();
      regel.product = product;
      this.addItem(regel);
    });

  }
  ngDoCheck() {
     const change = this.differ.diff(this.bestelling);
     this.totalPrice = this.calculatePrice();
   }
  calculatePrice() : number {
    let prijs = 0.0;
    this.bestelling.forEach(regel => {
        prijs = regel.product.prijs * regel.aantal;
    });

    return prijs;
  }

  addItem(regel:BestelRegel){

    this.bestelling.push(regel);
  }
  removeItem(regel:BestelRegel){
    let index = this.bestelling.indexOf(regel, 1);
    this.bestelling.splice(index);
  }
  incrementAmount(regel:BestelRegel) {

    regel.aantal +=1;

  }
  decrementAmount(regel:BestelRegel){
    regel.aantal -=1;
  }
}
