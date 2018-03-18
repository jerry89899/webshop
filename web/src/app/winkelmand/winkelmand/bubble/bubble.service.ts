import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
@Injectable()
export class BubbleService {
  private subject = new Subject<any>();

  constructor() { }
  closeBubble() {
        this.subject.next();
    }
 
  getCloseListener() :Observable<any> {
    return this.subject.asObservable();
  }
}
