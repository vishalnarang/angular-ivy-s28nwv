import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class SharedService {
  public child1: BehaviorSubject<any> = new BehaviorSubject(null);
  public child2: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  increment(){
    return of({ value: 10, operation: 'addition' });
  }
}
