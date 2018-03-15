import { Component, OnInit } from '@angular/core';
import { WinkelmandService } from '../../winkelmand.service';
@Component({
  selector: 'winkelmand-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(private service : WinkelmandService) {
  }

  ngOnInit() {
  }

}
