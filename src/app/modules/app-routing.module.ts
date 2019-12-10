import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreContentComponent } from '../Components/store-content/store-content.component';
import { ItemDetailComponent } from '../Components/item-detail/item-detail-component';
import { CartComponent } from '../Components/cart/cart.component';

const routes: Routes = [
  { path: '', component: StoreContentComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
