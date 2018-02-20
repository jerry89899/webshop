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
  @Input('product') product : Product
  constructor(private service:WinkelmandService) {

  }

  ngOnInit() {
  }
  add(){
    this.service.addToWinkelmand(this.product);
  }

}
