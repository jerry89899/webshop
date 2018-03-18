import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from '../domain';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
@Injectable()
export class ProductdetailComponent implements OnInit {
  title = 'app';
  id: number;
  private sub: any;
  product: Array<Product>;
  product_id: number;
  product_price: number;
  product_name: string;
  product_description: string;
  product_image: string;

  constructor(private route: ActivatedRoute, private _http: Http) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    return this._http.get('http://localhost:9000/getproductbyid?id=' + this.id)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.product_id = data.id;
        this.product_name = data.naam;
        this.product_image = data.plaatje;
        this.product_price = data.prijs;
        this.product_description = data.omschrijving;
        this.product = data;
      });
  }
}
