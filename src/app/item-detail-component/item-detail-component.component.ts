import { Component, OnInit } from "@angular/core";
import { ITEMS } from "../mock-store";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
@Component({
  selector: "app-item-detail-component",
  templateUrl: "./item-detail-component.component.html",
  styleUrls: ["./item-detail-component.component.scss"]
})
export class ItemDetailComponentComponent implements OnInit {
  item;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
    addToCart(item){
      window.alert("Your item as been added to the Cart!")
      this.cartService.adToCart(item)
    }
  ngOnInit() {
    this.route.paramMap.subscribe(
      param => (this.item = ITEMS[+param.get("id")])
    );
  }
}
