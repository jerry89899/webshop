import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = null;

  constructor(private _http: Http) {
    this.getRest();
  }

  private getRest() {
    return this._http.get('https://jerrylooman.nl/restservice/')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
}
