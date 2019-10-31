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
    'email':this.studentid,
    'password':this.email
   };
   this.studentLogin.login(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
   });}
}
