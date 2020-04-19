import { User } from '../shared/models/user.model';
import { LoginService } from '../shared/services/login.service';
import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

    private Users: User[] = [
        new User('sanket@gmail.com', '123456'),
        new User('john@gmail.com', '123456'),
        new User('steve@gmail.com', '123456')
    ];

    userLoggedInEmitter = new Subject<boolean>();

    constructor(private loginService: LoginService, private cookiService: CookieService){}

    validateUser(user: User): boolean {
        this.loginService.setLoggedInUser(user);
        this.cookiService.set('loggedInUserEmail', user.email);
        return true;
    }

    deleteUserCookies(){
        this.cookiService.delete('loggedInUserEmail');
    }

    isUserLoggedIn(): boolean {
        if(this.cookiService.get('loggedInUserEmail'))
            return true;
        return false;
    }
}