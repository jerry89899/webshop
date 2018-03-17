import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetaalwizardComponent } from './betaalwizard/betaalwizard.component';
import { DefaultComponent } from './sidebar/default/default.component';
import { WinkelmandModule } from '../winkelmand/winkelmand.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { ResponseComponent } from './response/response.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    WinkelmandModule,
    CommonModule,
    FormsModule,
    LoadingModule,
    RouterModule
  ],
  declarations: [BetaalwizardComponent, DefaultComponent, ResponseComponent],
  exports: [
    BetaalwizardComponent,
    ResponseComponent
  ]
})
export class BetaalwizardModule { }
