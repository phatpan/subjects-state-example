import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { IBLOG, IUPDATE } from '../models/iblog';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private initialState = null;
  private blogSubject = new BehaviorSubject(this.initialState);
  blogStore$ = this.blogSubject.pipe(
    scan((acc: IBLOG, newVal: IBLOG | IUPDATE) => {
      return { ...acc, ...newVal };
    }, this.initialState)
  );
  constructor() { }
}
