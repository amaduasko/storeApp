import { Injectable } from '@angular/core';
import { Item } from '../../Interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_items: Item[] = [];
  adToCart(item): void {
    this.cart_items.push(item);
  }
  getItem() {
    return this.cart_items;
  }
  clearCart() {
    this.cart_items = [];
    return this.cart_items;
  }
}
