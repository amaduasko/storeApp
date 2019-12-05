import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { StoreContentComponent } from './Containers/store-content/store-content.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponentComponent } from './Containers/item-detail-component/item-detail-component.component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreContentComponent,
    ItemDetailComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StoreContentComponent },
      { path: 'item/:id', component: ItemDetailComponentComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
