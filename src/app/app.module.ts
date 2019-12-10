import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Containers/app/app.component';
import { HeaderComponent } from './Components/header/header.component';
import { StoreContentComponent } from './Components/store-content/store-content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDetailComponent } from './Components/item-detail/item-detail-component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreContentComponent,
    ItemDetailComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
