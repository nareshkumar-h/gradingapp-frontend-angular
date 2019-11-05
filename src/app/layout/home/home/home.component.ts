import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    let user=JSON.parse(localStorage.getItem("user"));
    if(user!=null){
    if(user.role=="A")
    {
      this.router.navigate(["adminfeature"]);
    }
    else if(user.role=='T'){
    this.router.navigate(['userfeature']);}
    else 
    {
      this.router.navigate(['studentfeature']);
    }
  }
  else {
    this.router.navigate(['home']);
  }
}

}
