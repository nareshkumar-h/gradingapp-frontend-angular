import { Component, OnInit } from '@angular/core';
import { AdminloginService } from 'src/app/service/adminlogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private adminLoginservice:AdminloginService,private router:Router) { }

  ngOnInit() {
  }
login()
{

  let formData:any={
    'email':this.username,
    'password':this.password
   };
   this.adminLoginservice.login(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
   
    var data=res;
    if(data!=null){
      localStorage.setItem("user",JSON.stringify(res));
    this.router.navigate(['adminfeature']);
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
