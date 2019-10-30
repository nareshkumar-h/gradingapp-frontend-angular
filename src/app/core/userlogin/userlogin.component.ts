import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userlogin.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private userLoginservice:UserloginService,private router:Router) { }

  ngOnInit() {
  }
login()
{

  let formData:any={
    'email':this.username,
    'password':this.password
   };
   this.userLoginservice.login(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
   
    var data=res;
    if(data.role=='T'){
      localStorage.setItem("user",JSON.stringify(res));
    this.router.navigate(['userfeature']);
  }
    else
    {
     alert("Access Denied!Invalid credentials");
      document.getElementById("messageBody").innerHTML="Access Denied! Invalid credentials";
    }
   },(err)=>
   {
   console.log('error=>'+JSON.stringify(err.error.message));
   });
}
}
