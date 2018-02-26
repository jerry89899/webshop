import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../domain';
import { Observable } from 'rxjs';

@Injectable()
export class WinkelmandService {
    private subject = new Subject<any>();
    private deletedSubject = new Subject<any>();
    addToWinkelmand(product: Product) {
        this.subject.next({ product: Product });
    }
 
    getProductDeleted() {
      return this.deletedSubject.asObservable();
    }
    getProduct(): Observable<any> {
        return this.subject.asObservable();
    }

    removeFromWinkelmand(product : Product){
      this.deletedSubject.next({product: Product});
    }
}
