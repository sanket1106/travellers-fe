import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
})
export class LoginComponent implements OnInit {

    //email: string = '';
    //password: string = '';
    private user: User;
    private isValidUser: boolean = false;
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        if(this.userService.isUserLoggedIn()){
            this.router.navigate(['home']);
        }
    }

    onLogin(email, password){
        this.user = new User(email.value, password.value);
        this.isValidUser = this.userService.validateUser(this.user);
        console.log('User: ' + this.user + ' => ' +this.isValidUser);
        this.userService.userLoggedInEmitter.emit(true);
        this.router.navigate(['home']);
    }

}