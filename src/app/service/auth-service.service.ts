import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  getUser(){
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  
  isLoggedIn(){
    let user = this.getUser();
    return user != null;
  }
  getRole()
  {
    let user = this.getUser();
    return user.role;
  }
}
