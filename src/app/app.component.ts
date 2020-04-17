import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoginService]
})
export class AppComponent {
  title = 'travellers-fe';
}
