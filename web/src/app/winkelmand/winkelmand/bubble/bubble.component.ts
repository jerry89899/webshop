import { Component, OnInit } from '@angular/core';
import { WinkelmandService } from '../../winkelmand.service';
@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  public counter : number = 0;
  constructor(winkelmandService : WinkelmandService) {
    winkelmandService.getProduct().subscribe(product => {
      this.counter += 1;
      console.log(this.counter);
    });
    winkelmandService.getProductDeleted().subscribe(product => {
      this.counter -= 1;
    });
  }

  ngOnInit() {
  }

}
