import { Component, OnInit } from '@angular/core';
import { AddFacultyService } from 'src/app/service/add-faculty.service';


@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  name:String;
  email:String;
  mobile:number;
  password:String;

  constructor(private addfacultyService:AddFacultyService) { }

  ngOnInit() {
  }
  addEmployee()
  {
    let formData:any={
      'name':this.name,
      'email':this.email,
      'mobile':this.mobile,
      'password':this.password,
    };
    this.addfacultyService.addfaculty(formData).subscribe((res)=>{
      console.log(JSON.stringify(res));
      var data=res;
      if(data =! null){
        alert("Faculty Added Successfully")
      }else{
        alert("error occured");
      }
    },err=>{
      console.log("Already updated" , err);
      alert( err.error.errorMessage);
    });
  }

}
