import { Injectable } from '@angular/core';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends State {

  constructor() {
    super();
  }
}
