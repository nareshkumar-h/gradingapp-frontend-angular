import { Component, OnInit } from '@angular/core';
import { AddMarksService } from 'src/app/service/add-marks.service';


@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  regno:number;
  english:number;
  maths:number;
  physics:number;
  chemistry:number;
  computer:number;
  constructor(private addMarksService:AddMarksService) { }

  ngOnInit() {
  }
  addmarks()
  {
    let formData:any={
      'regno':this.regno,
      'mark1':this.english,
      'mark2':this.maths,
      'mark3':this.physics,
      'mark4':this.chemistry,
      'mark5':this.computer
    
  };
  this.addMarksService.addmarks(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
    var data=res.errorMessage;
    if(data == 'Success'){
      alert("Marks updated successfully.")
    }
  },err=>{
    console.log("Already updated" , err);
    alert( err.error.errorMessage);
  });
  }
}
