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
  private subscriptionRemove : any;
  private subscriptionAdd : any;
  constructor(private service:WinkelmandService) {

  }
  isAdded(id : number) : boolean{
    return this.product.id == id;
  }
  ngOnInit() {
    this.subscriptionAdd = this.service.getProduct().subscribe((product : Product) => {
      if( this.isAdded(product.id)){
        console.log("addddeeeeddd");

        this.added  = true;
      }
    });
    this. subscriptionRemove = this.service.getProductDeleted().subscribe((product : Product) => {

      if( this.isAdded(product.id)){
        this.added  = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscriptionAdd.unsubscribe();
    this.subscriptionRemove.unsubscribe();
  }
  add(){
    this.service.addToWinkelmand(this.product);
  }
  remove(){
    this.service.removeFromWinkelmand(this.product);
  }

}
