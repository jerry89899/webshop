import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { Product, BestelRegel }  from '../../../domain';
import {WinkelmandService } from '../../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements DoCheck  {
  @Input('bestelling') bestelling : Array<BestelRegel> = new Array<BestelRegel>();
  addSubscription: Subscription;
  removeSubscription: Subscription;
  differ : any;
  totalPrice : number;
  constructor(private winkelmandService: WinkelmandService, differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.addSubscription = this.winkelmandService.getProduct().subscribe(product => {
      let regel = new BestelRegel();
      regel.product = product;
      this.addItem(regel);
    });
    this.removeSubscription = this.winkelmandService.getProductDeleted().subscribe(product => {
      this.removeItem(product);
    });
  }
  ngDoCheck() {
     const change = this.differ.diff(this.bestelling);
     this.totalPrice = this.calculatePrice();
   }
  calculatePrice() : number {
    let prijs = 0.0;
    if(this.bestelling != undefined){
      this.bestelling.forEach(regel => {
          prijs = regel.product.prijs * regel.aantal;
      });
    }


    return prijs;
  }

  addItem(regel:BestelRegel){
    console.log(this.bestelling);
    this.bestelling.push(regel);
  }
  removeItem(regel:BestelRegel){
    let index = this.bestelling.indexOf(regel, 1);
    this.bestelling.splice(index);
  }
  triggerRemove(regel: BestelRegel) {
    this.winkelmandService.removeFromWinkelmand(regel.product);
  }
  triggerAdd(regel:BestelRegel){
    this.winkelmandService.addToWinkelmand(regel.product);
  }
  incrementAmount(regel:BestelRegel) {

    regel.aantal +=1;

  }
  decrementAmount(regel:BestelRegel){
    regel.aantal -=1;
  }
}
