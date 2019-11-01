import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GradewiselistService } from 'src/app/service/gradewiselist.service';

@Component({
  selector: 'app-gradewiselist',
  templateUrl: './gradewiselist.component.html',
  styleUrls: ['./gradewiselist.component.css']
})
export class GradewiselistComponent implements OnInit {

  constructor(private gradewiselistService:GradewiselistService,private router:Router) { }
 
  data:any;

  ngOnInit() {
    this.gradewise();
  }
 gradewise(){
    this.gradewiselistService.gradewise().subscribe((res)=>{
    console.log(JSON.stringify(res));
   
    this.data=res;
    if(this.data!=null){
      localStorage.setItem("marks",JSON.stringify(res));      
    }
    else
    {
      alert("No records available");
    }
   },(err)=>
   {
    console.log('error=>'+JSON.stringify(err.errorMessage));
   });
  }
}
