import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItem();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(customerData) {
    console.warn('Your data have been submitted', customerData);
    window.alert('Items purchased and shipped');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  ngOnInit() {}
}
