import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { LijstComponent } from './winkelmand/lijst/lijst.component';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';
import { AddtowinkelmandComponent } from './addtowinkelmand/addtowinkelmand.component';
import { WinkelmandService } from './winkelmand.service';
import { ProviderService } from './data/provider.service';
import { BubbleComponent } from './winkelmand/bubble/bubble.component';
import {RouterModule, Routes} from '@angular/router';
import { OverviewComponent } from './views/overview/overview.component';
import { LoadingModule } from 'ngx-loading';
import {BubbleService} from './winkelmand/bubble/bubble.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    AsyncLocalStorageModule,
    RouterModule,
    LoadingModule,
    FormsModule
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
    ProviderService,
    BubbleService
  ],

})
export class WinkelmandModule { }
