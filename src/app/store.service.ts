import { Injectable } from '@angular/core';
import { Item } from './item'
import { ITEMS } from './mock-store'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {}
  get Items() : Observable<Item[]>{
    return of(ITEMS)
  }
}
