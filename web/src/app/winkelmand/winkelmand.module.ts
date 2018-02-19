import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LijstComponent } from './lijst/lijst.component';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LijstComponent, WinkelmandComponent],
  exports: [
    WinkelmandComponent
  ]
})
export class WinkelmandModule { }
