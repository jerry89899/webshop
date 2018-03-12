import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../domain';
import { Observable } from 'rxjs';

@Injectable()
export class WinkelmandService {
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
}
