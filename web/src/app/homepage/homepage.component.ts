import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Discount } from '../domain';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private discounts : Array<Discount> = new Array<Discount>();
  constructor(private _dataService : AppDataService) {
    this._dataService.loadDiscounts().subscribe((discounts) => {
      this.discounts = discounts;
      console.log(this.discounts);
    });
  }

  ngOnInit() {
  }

}
