import { Injectable } from '@angular/core';
import { BestelRegel } from '../../domain';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs';

@Injectable()
export class ProviderService {

  constructor(protected localStorage: AsyncLocalStorage) { }
  syncBestelling(bestelling : Array<BestelRegel>){
    this.localStorage.setItem('bestelling', bestelling).subscribe(() => {
      console.log('lokaal opgeslage');
    });
  }
  getBestelling() : Observable<Array<BestelRegel>> {

    return this.localStorage.getItem<Array<BestelRegel>>('bestelling');
  }
  /**
  * Stuurt de Bestelling op
  **/
  sendBestelling(){

  }
}
