import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product, Discount} from '../domain';
import {Injectable} from '@angular/core';
import { AppDataService } from '../app-data.service';

// import {Appconfig} from '../app.config';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
@Injectable()
export class ProductdetailComponent implements OnInit {
  private product: Product;
  private aanbiedingen : Array<Discount>;
  private loading : boolean = true;

  // url: string;

  constructor(private route: ActivatedRoute, private _http: Http,  private _dataService: AppDataService) {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      _dataService.loadProduct(id).subscribe((product) => {
        this.product = product;
        this.aanbiedingen = product.aanbiedingen;
        console.log(this.aanbiedingen);
        this.loading = false;
      });
    });

  }

  ngOnInit() {

  /*  return this._http.get('http://localhost:9000/products/' + this.id)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.product_id = data.id;
        this.product_name = data.naam;
        this.product_image = data.plaatje;
        this.product_price = data.prijs;
        this.product_description = data.omschrijving;
        this.product = data;
      });
  }*/
}
