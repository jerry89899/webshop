import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _dataService : AppDataService) {
    this._dataService.loadDiscounts().subscribe((discounts) => {
      console.log(discounts);
    });
  }

  ngOnInit() {
  }

}
