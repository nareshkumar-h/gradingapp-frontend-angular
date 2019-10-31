import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthServiceService,private router:Router) { }

  ngOnInit() {
    let result: boolean = true;
  }
  getUser(){
    return this.getUser();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
  getRole()
  {
    return this.authService.getRole();
  }
}
