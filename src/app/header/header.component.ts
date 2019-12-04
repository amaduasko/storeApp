import { Component, OnInit } from '@angular/core';
import store_logo from '../../assets/images/shopping-cart.svg'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stroreLogo = store_logo;
  constructor() { }

  ngOnInit() {
  }

}
