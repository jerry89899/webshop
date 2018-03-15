import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetaalwizardComponent } from './betaalwizard/betaalwizard.component';
import { SteplistComponent } from './sidebar/steplist/steplist.component';
import { DefaultComponent } from './sidebar/default/default.component';
import { WinkelmandModule } from '../winkelmand/winkelmand.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    WinkelmandModule,
    CommonModule,
    FormsModule
  ],
  declarations: [BetaalwizardComponent, SteplistComponent, DefaultComponent],
  exports: [
    BetaalwizardComponent
  ]
})
export class BetaalwizardModule { }
