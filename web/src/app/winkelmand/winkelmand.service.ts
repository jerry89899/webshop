import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { Product, BestelRegel } from '../domain';
@Injectable()
export class WinkelmandService {
    private bestelling : Array<BestelRegel> = new Array<BestelRegel>();
    private subject = new Subject<any>();
    private deletedSubject = new Subject<any>();
    private productState = new Subject<any>();
    addToWinkelmand(product: Product) {
        this.subject.next(product);
    }
 
    getProductDeleted() :Observable<Product> {
      return this.deletedSubject.asObservable();
    }
    getProduct(): Observable<Product> {
        return this.subject.asObservable();
    }
    getProductState(){
      return this.productState.asObservable();
    }
    updateProductState(productId : number){
      this.productState.next(productId);
    }
    removeFromWinkelmand(product : Product){
      this.deletedSubject.next(product);
    }
    addRegel(bestelRegel:BestelRegel){
      this.bestelling.push(bestelRegel);
    }
    removeRegel(bestelRegel:BestelRegel){
      this.bestelling = this.bestelling.filter(obj => obj !== bestelRegel);
    }
    getBestelling(){
      return this.bestelling;
    }
    resetBestelling(){
      this.bestelling = new Array<BestelRegel>();
    }
    getRegelById(regel: BestelRegel){
      return this.bestelling.filter(bestelregel => bestelregel.id == regel.id);
    }
    getBestellingTotal() : number{
      let prijs = 0.0;
      if(this.bestelling != undefined){
        this.bestelling.forEach(regel => {
            prijs += regel.product.prijs * regel.aantal;
        });
      }
      return prijs;
    }
}
