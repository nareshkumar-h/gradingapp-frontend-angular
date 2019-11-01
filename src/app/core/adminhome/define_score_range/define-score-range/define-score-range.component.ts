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
max1:number;
max2:number;
max3:number;
max4:number;
min1:number;
min2:number;
min3:number;
min4:number;


  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.listGrades();
/*  
    $('#min1').on('keyup',function(){
      let min1 = parseInt($('#min1').val());
    var  max2 = min1 - 1;
      $('#max2').val(max2);
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
 });*/
    function checkGrade()
    {
        console.log("checkGrade");
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


 $(function(){
   /* function checkGrade()
    {
        let grade1 = parseInt($('#grade1').val());
        let grade2 = parseInt($('#grade2').val());
        let grade3 = parseInt($('#grade3').val());
        let grade4 = parseInt($('#grade4').val());
        let grade5 = parseInt($('#grade5').val());
        let grade6 = parseInt($('#grade6').val());
        let grade7 = parseInt($('#grade7').val());
        let grade8 = parseInt($('#grade8').val());
        let isStatus =  false;
        if(grade1 < grade2 && grade1 > grade4 && grade3 < grade4 && grade3 > grade6 && grade5 < grade6 && grade5 > grade8)
        {
            isStatus = true;
        }
        return isStatus;
    }
    */


  
​
   $('#min1').on('keyup',function(e){
    var id = $(this).attr('id');
        setMarks(id);
        validateMarkRange(id);
​
   });

   $('#min2').on('keyup',function(e){
    var id = $(this).attr('id');
        setMarks(id);
        validateMarkRange(id);
​
   });

   $('#min3').on('keyup',function(e){
    var id = $(this).attr('id');
        setMarks(id);
        validateMarkRange(id);
​
   });

   $('#min4').on('keyup',function(e){
    var id = $(this).attr('id');
        setMarks(id);
        validateMarkRange(id);
​
   });


   function setMarks(id){
        var mark = parseInt($("#"+id).val());
        var number = id.substr(id.length-1);
        console.log("Keyup:" + id + ", current_val:" + mark + ", " + number);  
        $('#max' +  parseInt(number+1)).val( mark - 1);
   }


   function validateMarkRange(id){
        let isStatus = checkGrade();
        console.log(id  + "-" + isStatus);
        if(isStatus)
        {
            $('#' + id).css({'border':'2px solid gray'});
            
            console.log("true");
        } else{
            $('#' + id).css({'border':'2px solid red'});
        }
   }
/*
   $('#grade4').on('keyup',function(){
        let grade4 = parseInt($('#grade4').val());
        let grade1 = grade4 + 1;
        $('#grade1').val(grade1);
​
        let isStatus = checkGrade();
        if(isStatus)
        {
            $('#grade4').css({'border':'2px solid gray'});
            console.log("true");
        } else{
            $('#grade4').css({'border':'2px solid red'});
        }
​
   });
   $('#grade3').on('keyup',function(){
        let grade3 = parseInt($('#grade3').val());
        let grade6 = grade3 - 1;
        $('#grade6').val(grade6);
​
        let isStatus = checkGrade();
        if(isStatus)
        {
            $('#grade3').css({'border':'2px solid gray'});
            console.log("true");
        } else{
            $('#grade3').css({'border':'2px solid red'});
        }
​
   });
   $('#grade6').on('keyup',function(){
        let grade6 = parseInt($('#grade6').val());
        let grade3 = grade6 + 1;
        $('#grade3').val(grade3);
​
        let isStatus = checkGrade();
        if(isStatus)
        {
            $('#grade6').css({'border':'2px solid gray'});
            console.log("true");
        } else{
            $('#grade6').css({'border':'2px solid red'});
        }
​
   });
   $('#grade5').on('keyup',function(){
        let grade5 = parseInt($('#grade5').val());
        let grade8 = grade5 - 1;
        $('#grade8').val(grade8);
​
        let isStatus = checkGrade();
        if(isStatus)
        {
            $('#grade5').css({'border':'2px solid gray'});
            console.log("true");
        } else{
            $('#grade5').css({'border':'2px solid red'});
        }
​
   });
   $('#grade8').on('keyup',function(){
        let grade8 = parseInt($('#grade8').val());
        let grade5 = grade8 + 1;
        $('#grade5').val(grade5);
​
        let isStatus = checkGrade();
        if(isStatus)
        {
            $('#grade8').css({'border':'2px solid gray'});
            console.log("true");
        } else{
            $('#grade8').css({'border':'2px solid red'});
        }
​
   });
   */
})

  }
  grades:any = [];

 listGrades(){
   this.http.get("https://gradingsystemgrade.herokuapp.com/ScoreRange/viewscorerange").subscribe ( (res)=>{
     this.grades = res;
   })
 }
updateRanges()
{
    let min1 = parseInt($('#min1').val());
    let max1 = parseInt($('#max1').val());
    let min2 = parseInt($('#min2').val());
    let max2 = parseInt($('#max2').val());
    let min3 = parseInt($('#min3').val());
    let max3 = parseInt($('#max3').val());
    let min4 = parseInt($('#min4').val());
    let max4 = parseInt($('#max4').val());
    this.http.get("https://gradingsystemgrade.herokuapp.com/ScoreRange/update?grade1=A&grade2=B&grade3=C&grade4=D&id1=1&id2=2&id3=3&id4=4&max1="+max1+"+&max2=+"+max2+"+&max3=+"+max3+"+&max4=+"+max4+"+&min1=+"+min1+"+&min2=+"+min2+"+&min3=+"+min3+"+&min4=+"+min4+"+").subscribe ( (res)=>{
        var data = res;
       alert("successfully updated");
       
    })
}
 
 validateMarkChange(event){
    console.log('Validate Mark Change');
    //console.log(event);
    //console.log(event.srcElement);
    var id = event.srcElement.id;
    console.log("Selected Id:" + id);

    //var id = $(this).attr('id');
        this.setMarks(id);
        this.validateMarkRange(id);
    
}

setMarks(id){
    var mark = parseInt($("#"+id).val());
    var number = parseInt(id.substr(id.length-1));
    
    
    if ( id.startsWith('min')){
        var previousMark = mark -1;
        console.log("Keyup - Min:" + id + ", current_val:" + mark + ",change - max" + (number+1) +" to " + previousMark);  
        $('#max' +  (number+1)).val(previousMark);
    }
    else{
        var nextMark = mark +1;
        console.log("Keyup - Max:" + id + ", current_val:" + mark + ",change - min" + (number+1) +" to " + nextMark);  
        $('#min' +  (number-1)).val(nextMark);
    }
}


validateMarkRange(id){
    let isStatus = this.checkGrade();
    console.log(id  + "-" + isStatus);
    if(isStatus)
    {
        $('#' + id).css({'border':'2px solid gray'});
        
        console.log("true");
    } else{
        $('#' + id).css({'border':'2px solid red'});
    }
}
checkGrade()
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
