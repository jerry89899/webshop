import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetaalwizardComponent } from './betaalwizard/betaalwizard.component';
import { SteplistComponent } from './sidebar/steplist/steplist.component';
import { DefaultComponent } from './sidebar/default/default.component';
import { WinkelmandModule } from '../winkelmand/winkelmand.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    WinkelmandModule,
    CommonModule,
    FormsModule,
    LoadingModule
  ],
  declarations: [BetaalwizardComponent, SteplistComponent, DefaultComponent],
  exports: [
    BetaalwizardComponent
  ]
})
export class BetaalwizardModule { }
