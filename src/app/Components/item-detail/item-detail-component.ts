import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../mocks/mock-store';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail-component.html',
  styleUrls: ['./item-detail-component.scss']
})
export class ItemDetailComponent implements OnInit {
  item;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(item) {
    window.alert('Your item as been added to the Cart!');
    this.cartService.adToCart(item);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(
      param => (this.item = ITEMS[+param.get('id')])
    );
  }
}
