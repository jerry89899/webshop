import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LijstComponent } from './lijst/lijst.component';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';
import { AddtowinkelmandComponent } from './addtowinkelmand/addtowinkelmand.component';
import { WinkelmandService } from './winkelmand.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LijstComponent, WinkelmandComponent, AddtowinkelmandComponent],
  exports: [
    WinkelmandComponent,
    AddtowinkelmandComponent
  ],
  providers: [
    WinkelmandService
  ],

})
export class WinkelmandModule { }
