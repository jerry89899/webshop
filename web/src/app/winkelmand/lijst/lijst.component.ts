import { Component, OnInit } from '@angular/core';
import { Product, BestelRegel }  from '../../domain';
import {WinkelmandService } from '../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {
  private bestelling : Array<BestelRegel>;
  subscription: Subscription;
  constructor(private winkelmandService: WinkelmandService) {
    this.bestelling = new Array<BestelRegel>();
    this.subscription = this.winkelmandService.getProduct().subscribe(product => {
      let regel = new BestelRegel();
      regel.product = product;
      this.addItem(regel);
    });

  }

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


}
