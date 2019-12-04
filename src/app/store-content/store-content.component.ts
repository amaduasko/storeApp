import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from '../item'

@Component({
  selector: 'app-store-content',
  templateUrl: './store-content.component.html',
  styleUrls: ['./store-content.component.scss']
})
export class StoreContentComponent implements OnInit {

  Item: Item[];

  constructor(public service: StoreService) { }
  getItems(): void {
    this.service.Items.subscribe(items => this.Item = items)
  }

  ngOnInit() {
    this.getItems()
  }

}
