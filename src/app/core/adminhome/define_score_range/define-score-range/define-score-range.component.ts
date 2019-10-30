import { Component, OnInit } from '@angular/core';
import  $ from 'jquery';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GuardsCheckStart } from '@angular/router';
@Component({
  selector: 'app-define-score-range',
  templateUrl: './define-score-range.component.html',
  styleUrls: ['./define-score-range.component.css']
})
export class DefineScoreRangeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
    this.listGrades();
  
    $('#min1').on('keyup',function(){
      let min1 = parseInt($('#min1').val());
    var  max2 = min1 - 1;
      $('#max2').val(max2);
      /* Check Grade */
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#min1').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#min1').css({'border':'2px solid red'});
          document.getElementById("gradeMsg").innerHTML="enter valid mark";
      }
​
 });





 $('#max2').on('keyup',function(){
      let max2 = parseInt($('#max2').val());
      let min1 = max2 + 1;
      $('#min1').val(min1);
​
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#max2').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#max2').css({'border':'2px solid red'});
      }
​
 });
 $('#min2').on('keyup',function(){
      let min2 = parseInt($('#min2').val());
      let max3 = min2 - 1;
      $('#max3').val(max3);
​
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#min2').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#min2').css({'border':'2px solid red'});
      }
​
 });
 $('#max3').on('keyup',function(){
      let max3 = parseInt($('#max3').val());
      let min2 = max3 + 1;
      $('#min2').val(min2);
​
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#max3').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#max3').css({'border':'2px solid red'});
      }
​
 });
 $('#min3').on('keyup',function(){
      let min3 = parseInt($('#min3').val());
      let max4 = min3 - 1;
      $('#max4').val(max4);
​
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#min3').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#min3').css({'border':'2px solid red'});
      }
​
 });
 $('#max4').on('keyup',function(){
      let max4 = parseInt($('#max4').val());
      let min3 = max4 + 1;
      $('#min3').val(min3);
​
      let isStatus = checkGrade();
      if(isStatus)
      {
          $('#max4').css({'border':'2px solid gray'});
          console.log("true");
      } else{
          $('#max4').css({'border':'2px solid red'});
      }
​
 });
 function checkGrade()
 {
     let min1 = parseInt($('#min1').val());
     let max1 = parseInt($('#max1').val());
     let min2 = parseInt($('#min2').val());
     let max2 = parseInt($('#max2').val());
     let min3 = parseInt($('#min3').val());
     let max3 = parseInt($('#max3').val());
     let min4 = parseInt($('#min4').val());
     let max4 = parseInt($('#max4').val());
     let isStatus =  false;
     if(min1 < max1 && min1 > max2 && min2 < max2 && min2 > max3 && min3 < max3 && min3 > max4)
     {
         isStatus = true;
 }
     return isStatus;
 }
  }

 

  grades:any = [];

 listGrades(){
   this.http.get("https://gradingsystemgrade.herokuapp.com/ScoreRange/viewscorerange").subscribe ( (res)=>{
     this.grades = res;
   })
 }


}
