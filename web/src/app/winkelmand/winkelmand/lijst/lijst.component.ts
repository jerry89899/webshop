import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { Product, BestelRegel }  from '../../../domain';
import {WinkelmandService } from '../../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';
import { ProviderService } from '../../data/provider.service';
import { Router, NavigationEnd } from '@angular/router'
@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {
  addSubscription: Subscription;
  removeSubscription: Subscription;
  differ : any;
  totalPrice : number;
  constructor(
    private winkelmandService: WinkelmandService,
    private dataService : ProviderService,
    private router : Router
  ) {
//    this.differ = differs.find([]).create(null);
    this.addSubscription = this.winkelmandService.getProduct().subscribe(product => {

      let regel = this.getRegelByProduct(product);
      regel.product = product;
      this.addItem(regel);
    });
    this.removeSubscription = this.winkelmandService.getProductDeleted().subscribe(product => {
      let regel = this.getRegelByProduct(product);
      this.removeItem(regel);
    });
    /**
    * Na route change synchroniseer weer de bestellingen
    **/
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.syncBestelling();
      }
    });
  }

  getRegelByProduct(product: Product) : BestelRegel {
    let getRegel : BestelRegel = new BestelRegel();
    this.winkelmandService.getBestelling().forEach((regel) => {
      console.log(regel.product.id == product.id);
      if(regel.product.id == product.id){
        getRegel = regel;
      }
    });
    return getRegel;
  }


  ngOnInit(){
    /**
    * Er is een kleine cooldown toegevoegd, zodat iedere "subscribtion" tijd heeft om zichzelf te registreren.
    **/
    setTimeout(() => {
      this.syncBestelling();

    }, 1000);
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
          console.log(regel);
          this.triggerAdd(regel);
        });

      }

    });

  }

  addItem(regel:BestelRegel){
    console.log(this.winkelmandService.getRegelById(regel).length);
    if(this.winkelmandService.getRegelById(regel).length == 0){
      this.winkelmandService.addRegel(regel)
      this.dataService.syncBestelling(this.winkelmandService.getBestelling());
    }


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
    this.dataService.syncBestelling(this.winkelmandService.getBestelling());

  }
  decrementAmount(regel:BestelRegel){
    if(regel.aantal > 1){
      regel.aantal -=1;
      this.dataService.syncBestelling(this.winkelmandService.getBestelling());

    }

  }
}
