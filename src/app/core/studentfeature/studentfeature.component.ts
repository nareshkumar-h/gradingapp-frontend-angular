import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentfeatureService } from 'src/app/service/studentfeature.service';
@Component({
  selector: 'app-studentfeature',
  templateUrl: './studentfeature.component.html',
  styleUrls: ['./studentfeature.component.css']
})
export class StudentfeatureComponent implements OnInit {

  constructor(private http:HttpClient,private studentfeatureservice:StudentfeatureService) { }

  ngOnInit() {
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
    this.marks=res.marks;
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
