import { Component, OnInit } from '@angular/core';
import { WinkelmandService } from '../../winkelmand.service';
@Component({
  selector: 'winkelmand-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  private loading: boolean = true;
  constructor(private service : WinkelmandService) {
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
