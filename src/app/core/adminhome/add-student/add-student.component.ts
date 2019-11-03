import { Component, OnInit } from '@angular/core';
import { AddStudentService } from 'src/app/service/add-student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  name:String;
  email:String;

  constructor(private addstudentService:AddStudentService) { }

  ngOnInit() {
  }
  addEmployee()
  {
    let formData:any={
      'email':this.email, 
      'name':this.name,
    };
    this.addstudentService.addStudent(formData).subscribe((res)=>{
      console.log(JSON.stringify(res));
      var data=res;
      if(data =! null){
        alert("Student Added Successfully, ID:"+data.regno)
      }else{
        alert("error occured");
      }
    },err=>{
      console.log("Already updated" , err);
      alert( err.error.message);
    });
  }

}
