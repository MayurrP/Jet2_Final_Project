import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo : User)
  {
    localStorage.setItem("ACCESS_TOKEN","access_token");
  }

  public isLoggedIn()
  {
    return localStorage.getItem("ACESS_TOKEN") !== null;
  }

  public logout()
  {
    localStorage.removeItem("ACCESS_TOKEN");
  }
}
