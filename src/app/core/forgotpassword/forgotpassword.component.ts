import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  forgotpassword(){
    var email=this.email;
    this.http.get("https://gms-faculty-ms.herokuapp.com/forgotpassword?email="+email).subscribe ( (res)=>{
      let data = res;
      alert( "Mail has been sent");
  },err=>{
    alert( err.error.errorMessage);
  });
    
  }
}
