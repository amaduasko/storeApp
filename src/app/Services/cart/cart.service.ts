import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../Interfaces/item';
import { CARTS } from '../../Modues/mock-store';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  adToCart(item): void {
    CARTS.push(item);
  }
  getItem(): Observable<Item[]> {
    return of(CARTS);
  }
  clearCart() {
    while (CARTS.length !== 0) CARTS.splice(1);
    return CARTS;
  }
}
