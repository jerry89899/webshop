import { Component, OnInit } from '@angular/core';
import { WinkelmandService } from '../../winkelmand.service';
import {AppDataService } from '../../../app-data.service';
@Component({
  selector: 'winkelmand-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  private loading: boolean = true;
  constructor(private service : WinkelmandService, private _dataService : AppDataService) {
    /**
    * Wacht totdat de berichten zijn toegevoegd aan de lijst
    **/
    service.getProduct().subscribe(() => {
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
