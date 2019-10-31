import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfeature',
  templateUrl: './adminfeature.component.html',
  styleUrls: ['./adminfeature.component.css']
})
export class AdminfeatureComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    var isValid=true;
    let user=JSON.parse(localStorage.getItem("user"));
    if(user==null){
    
    this.router.navigate(['home']);
  }
  }

}
