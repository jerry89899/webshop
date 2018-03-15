import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
@Injectable()
export class ProductdetailComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id, 'product id');
    //   let headers = new Headers();
    //   headers.append('id', String(this.id));
    //   let rest: string = 'https://jerrylooman.nl/restservice/';
    //   return this.http
    //     .get(rest, headers)
    //     .map(response => response.json());
    });
  }
}
