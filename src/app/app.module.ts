import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DealsListComponent } from './deals/deals-list/deals-list.component';
import { DealsComponent } from './deals/deals.component';
import { DealItem } from './deals/deals-list/deal-item/deal-item.component';
import { DealsDetailsComponent } from './deals/deals-details/deals-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DealsListComponent,
    DealsComponent,
    DealsDetailsComponent,
    DealItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
