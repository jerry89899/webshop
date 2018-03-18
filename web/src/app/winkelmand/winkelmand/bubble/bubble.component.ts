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
  private @ViewChild('dropdownObject') dropdownObject : any;
  constructor(winkelmandService : WinkelmandService, bubbleService : BubbleService) {
    winkelmandService.getProduct().subscribe(product => {
      this.counter += 1;
      console.log(this.counter);
    });
    winkelmandService.getProductDeleted().subscribe(product => {
      this.counter -= 1;
    });
    bubbleService.getCloseListener().subscribe(() => {
       this.dropdownObject.close();
    });
  }

  ngOnInit() {
  }

}
