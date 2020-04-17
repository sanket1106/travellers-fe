import { User } from '../models/user.model';

export class LoginService {

    private loggedInUser: User;
    constructor(){}

    setLoggedInUser(user: User){
        this.loggedInUser = user;
    }
}