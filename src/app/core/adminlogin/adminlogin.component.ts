import { Component, OnInit } from '@angular/core';
import { AdminloginService } from 'src/app/service/adminlogin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    let user=JSON.parse(localStorage.getItem("user"));
    if(user!=null){
      if(user.role=="A"){
        this.router.navigate(["adminfeature"]);
      }else if(user.role=='T'){
        this.router.navigate(['userfeature']);}
      }
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
    if(data==null){
      alert("Access Denied!Invalid credentials");
      document.getElementById("messageBody").innerHTML="Access Denied! Invalid credentials";
  }

   else if(data.role=='A'){
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
