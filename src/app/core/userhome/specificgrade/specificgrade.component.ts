import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecificgradeService } from 'src/app/service/specificgrade.service';

@Component({
  selector: 'app-specificgrade',
  templateUrl: './specificgrade.component.html',
  styleUrls: ['./specificgrade.component.css']
})
export class SpecificgradeComponent implements OnInit {
  grade:string;
  constructor(private specificgradeService:SpecificgradeService,private router:Router) { }

  data:any;

  
  ngOnInit() {
    
  }

  specificgrade(){
    let formData:any={
      'grade':this.grade
     };
    this.specificgradeService.specificgrade(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
   
    this.data=res;
    if(this.data!=undefined){
      localStorage.setItem("marks",JSON.stringify(res)); 
    }
    
   },(err)=>
   {
     this.data = JSON.stringify(err.errorMessage);
    console.log('error=>'+this.data);
    if(this.data==undefined){
      alert("No records available");
    }
   });
  }
}
