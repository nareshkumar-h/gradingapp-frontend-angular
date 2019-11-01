import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentLoginService } from 'src/app/service/student-login.service';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  studentid:number;
  email:string;
  constructor(private router:Router,private studentLogin:StudentLoginService) { }

  ngOnInit() {
  }
  login()
  {

  let formData:any={
    'studentid':this.studentid,
    'email':this.email
   };
   this.studentLogin.login(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
    let data=res;
    if(data!=null)
    {
      localStorage.setItem("user",JSON.stringify(res));
    this.router.navigate(['studentfeature']);
    }
    else
    {
      alert("Access denied! Invalid credentials");
    }
   },err=>{
    console.log("Access denied! Invalid credentials" , err);
    alert( "Access denied! Invalid credentials");});}
}
