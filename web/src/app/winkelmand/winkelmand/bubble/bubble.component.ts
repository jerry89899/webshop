import { Component, OnInit, ViewChild } from '@angular/core';
import { WinkelmandService } from '../../winkelmand.service';
import { BubbleService } from './bubble.service';
@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  public counter : number = 0;
  @ViewChild('dropdownObject') dropdownObject;
  constructor(winkelmandService : WinkelmandService, bubbleService : BubbleService) {
    winkelmandService.getProduct().subscribe(product => {
      this.counter = winkelmandService.getBestelling().length;
    });
    winkelmandService.getProductDeleted().subscribe(product => {
      this.counter = winkelmandService.getBestelling().length;
    });
    bubbleService.getCloseListener().subscribe(() => {
       this.dropdownObject.close();
    });
  }

  ngOnInit() {
  }

}
