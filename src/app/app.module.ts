import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DealsListComponent } from './deals/deals-list/deals-list.component';
import { DealsComponent } from './deals/deals.component';
import { DealItem } from './deals/deals-list/deal-item/deal-item.component';
import { DealsDetailsComponent } from './deals/deals-details/deals-details.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserService } from './auth/user.service';
import { HeaderLinkButtonComponent } from './header/header-link-button/header-link-button.component';
import { ErrorComponent } from './error/error.component';

// const appRoutes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    DealsListComponent,
    DealsComponent,
    DealsDetailsComponent,
    DealItem,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    HeaderLinkButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CookieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
