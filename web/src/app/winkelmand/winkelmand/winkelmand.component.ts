import { Component, OnInit, AfterViewInit, ViewChild ,ElementRef} from '@angular/core';
import { BubbleService} from '../winkelmand/bubble/bubble.service';
import { BestelRegel } from '../../domain';
@Component({
  selector: 'winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrls: ['./winkelmand.component.css']
})
export class WinkelmandComponent {
  private totalPrice : number = 0.0;
  constructor(private service:BubbleService) {

  }
  closeBubble(event) {
    this.service.closeBubble();
  }
}
