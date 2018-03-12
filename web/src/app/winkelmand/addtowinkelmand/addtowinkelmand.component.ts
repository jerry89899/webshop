import { Component, OnInit, Input } from '@angular/core';
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
  added : boolean = false;
  constructor(private service:WinkelmandService) {
    service.getProduct().subscribe(() => {
      this.added = true;
    });
    service.getProductDeleted().subscribe(() => {
      this.added = false;
    });
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
