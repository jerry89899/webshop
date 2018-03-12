import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { Product, BestelRegel }  from '../../../domain';
import {WinkelmandService } from '../../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';
import { ProviderService } from '../../data/provider.service';
@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements DoCheck, OnInit  {
  @Input('bestelling') bestelling : Array<BestelRegel> = new Array<BestelRegel>();
  addSubscription: Subscription;
  removeSubscription: Subscription;
  differ : any;
  totalPrice : number;
  constructor(
    private winkelmandService: WinkelmandService,
    private dataService : ProviderService,
    differs: IterableDiffers
  ) {
    this.differ = differs.find([]).create(null);
    this.addSubscription = this.winkelmandService.getProduct().subscribe(product => {

      let regel = new BestelRegel();
      regel.product = product;
      this.addItem(regel);

    });
    this.removeSubscription = this.winkelmandService.getProductDeleted().subscribe(product => {
      let regel = this.getRegelByProduct(product);
      this.removeItem(regel);
    });
  }

  getRegelByProduct(product: Product) : BestelRegel {
    let getRegel : BestelRegel = null;
    this.bestelling.forEach((regel) => {
      console.log(regel.product.id == product.id);
      if(regel.product.id == product.id){
        getRegel = regel;
      }
    });
    return getRegel;
  }

  ngOnInit(){
    this.syncBestelling();
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
  syncBestelling(){
    /**
    * Haal lokaal opgeslagen bestelling op
    **/
    this.dataService.getBestelling().subscribe((bestelling) => {
      /**
      * Update nu alle items in de store (Zodat de knop veranderd)
      **/
      bestelling.forEach((regel) => {
        this.triggerAdd(regel);
      });

    });

  }

  addItem(regel:BestelRegel){
      this.bestelling.push(regel);
      this.dataService.syncBestelling(this.bestelling);

  }
  removeItem(regel:BestelRegel){
      this.bestelling = this.bestelling.filter(obj => obj !== regel);
      this.dataService.syncBestelling(this.bestelling);

  }
  triggerRemove(regel: BestelRegel) {
    console.log(regel);
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
