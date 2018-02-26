import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WinkelmandModule } from './winkelmand/winkelmand.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    NgbModule.forRoot(),
    BrowserModule,
    WinkelmandModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
