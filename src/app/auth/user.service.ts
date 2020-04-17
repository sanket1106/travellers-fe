import { User } from '../shared/models/user.model';
import { LoginService } from '../shared/services/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private Users: User[] = [
        new User('sanket@gmail.com', '123456'),
        new User('john@gmail.com', '123456'),
        new User('steve@gmail.com', '123456')
    ];
    constructor(private loginService: LoginService){}

    validateUser(user: User): boolean {
        this.loginService.setLoggedInUser(user);
        return true;
    }
}