import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userfeature',
  templateUrl: './userfeature.component.html',
  styleUrls: ['./userfeature.component.css']
})
export class UserfeatureComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    let user=JSON.parse(localStorage.getItem("user"));
    if(user==null){
    this.router.navigate(['home']);
  }
  }

}
