import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentfeatureService } from 'src/app/service/studentfeature.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentfeature',
  templateUrl: './studentfeature.component.html',
  styleUrls: ['./studentfeature.component.css']
})
export class StudentfeatureComponent implements OnInit {

  constructor(private http:HttpClient,private studentfeatureservice:StudentfeatureService,private router:Router) { }

  ngOnInit() {
    let user=JSON.parse(localStorage.getItem("user"));
    if(user!=null){
      if(user.role=="A"){
        this.router.navigate(["adminfeature"]);
      }else if(user.role=='T'){
        this.router.navigate(['userfeature']);}
        else
        {
          this.router.navigate(['studentfeature']);
        }
      }
      else
      {
        this.router.navigate(['home']);
      }

this.getResult();
  }
  subjects:any=[];
  marks:any=[];
  studentGrade:any=[];
  resData:[];
  getResult()
  {
  let user=JSON.parse(localStorage.getItem("user"));
  let formData:any={
    'regno':user.regno,
   };
   this.studentfeatureservice.getResult(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
    this.subjects=res.subjectDTO;
    this.marks=res.markList;
    this.studentGrade=res.studentGrade;
    this.resData = res;
   })
  }
  getSubjectName(subId)
  {
    let subjectName = "";
    for(let s of this.subjects){
      if ( s.id == subId){
        subjectName = s.name;
        break;
      }
    }
    return subjectName;
  }
}
