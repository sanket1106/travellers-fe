import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';
import { LoginService } from './shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, UserService]
})
export class AppComponent implements OnInit {
  title = 'travellers-fe';

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!this.userService.isUserLoggedIn())
      this.router.navigate(['login']);
  }
}
