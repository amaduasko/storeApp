import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ITEMS } from '../../mocks/mock-store';
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
