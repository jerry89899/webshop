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
  addSubscription: Subscription;
  removeSubscription: Subscription;
  differ : any;
  totalPrice : number;
  constructor(
    private winkelmandService: WinkelmandService,
    private dataService : ProviderService,
  //  differs: IterableDiffers
  ) {
//    this.differ = differs.find([]).create(null);
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
    this.winkelmandService.getBestelling().forEach((regel) => {
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
     /*const change = this.differ.diff(this.winkelmandService.getBestelling());
     this.totalPrice = this.calculatePrice();*/
   }
  calculatePrice() : number {
    return this.winkelmandService.getBestellingTotal();
  }
  syncBestelling(){
    /**
    * Haal lokaal opgeslagen bestelling op
    **/
    this.dataService.getBestelling().subscribe((bestelling) => {
      /**
      * Update nu alle items in de store (Zodat de knop veranderd)
      **/
      if(bestelling != null){
        bestelling.forEach((regel) => {
          this.triggerAdd(regel);
        });

      }

    });

  }

  addItem(regel:BestelRegel){
    this.winkelmandService.addRegel(regel)
    this.dataService.syncBestelling(this.winkelmandService.getBestelling());

  }
  removeItem(regel:BestelRegel){
    this.winkelmandService.removeRegel(regel);
      this.dataService.syncBestelling(this.winkelmandService.getBestelling());

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
