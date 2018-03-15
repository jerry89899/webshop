import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { LijstComponent } from './winkelmand/lijst/lijst.component';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';
import { AddtowinkelmandComponent } from './addtowinkelmand/addtowinkelmand.component';
import { WinkelmandService } from './winkelmand.service';
import { ProviderService } from './data/provider.service';
import { BubbleComponent } from './views/bubble/bubble.component';
import {RouterModule, Routes} from '@angular/router';
import { OverviewComponent } from './views/overview/overview.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    AsyncLocalStorageModule,
    RouterModule
  ],
  declarations: [LijstComponent, WinkelmandComponent, AddtowinkelmandComponent, BubbleComponent, OverviewComponent],
  exports: [
    WinkelmandComponent,
    AddtowinkelmandComponent,
    BubbleComponent,
    OverviewComponent
  ],
  providers: [
    WinkelmandService,
    ProviderService
  ],

})
export class WinkelmandModule { }
