import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isUserLoggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.userService.isUserLoggedIn();
    console.log("Is user logged in: " + this.isUserLoggedIn);
  }

}
