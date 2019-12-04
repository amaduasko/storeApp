import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item'
import { CARTS } from './mock-store'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient){}
  
  adToCart(item) : void {
    const url = '/src/cart.json'
    this.http.post(url,item).subscribe(param => console.log(param))
    CARTS.push(item)
  }
  getItem(): Observable<Item[]> {
    return of(CARTS)
  }
  clearCart() {
    while(CARTS.length !== 0) CARTS.splice(1)
    return CARTS
  }
}
