import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Product } from '../../domain';
import { WinkelmandService }  from '../winkelmand.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'addtowinkelmand',
  templateUrl: './addtowinkelmand.component.html',
  styleUrls: ['./addtowinkelmand.component.css']
})
export class AddtowinkelmandComponent implements OnInit {
  @Input('product') product : Product;
  private added : boolean = false;
  constructor(private service:WinkelmandService) {
    this.service.getProduct().subscribe((product : Product) => {
      if( this.isAdded(product.id)){
        this.added  = true;
      }
    });
    this.service.getProductDeleted().subscribe((product : Product) => {

      if( this.isAdded(product.id)){
        this.added  = false;
      }
    });
  }
  isAdded(id : number) : boolean{
    return this.product.id == id;
  }
  ngOnInit() {


  }
  add(){
    this.service.addToWinkelmand(this.product);
  }
  remove(){
    this.service.removeFromWinkelmand(this.product);
  }

}
