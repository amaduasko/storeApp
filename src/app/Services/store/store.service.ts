import { Injectable } from '@angular/core';
import { Item } from '../../Interfaces/item';
import { ITEMS } from '../../Modues/mock-store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {}
  get Items(): Observable<Item[]> {
    return of(ITEMS);
  }
}
