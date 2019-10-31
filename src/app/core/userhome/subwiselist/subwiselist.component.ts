import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subwiselist',
  templateUrl: './subwiselist.component.html',
  styleUrls: ['./subwiselist.component.css']
})
export class SubwiselistComponent implements OnInit {

  subId:number;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.sublist();
  }

  list:any = [];
  marks:any = [];
  
  sublist(){
    this.http.get("https://gradingappsubject.herokuapp.com/subjectList").subscribe ( (res)=>{
    this.list = res;
    })
  }

  subwise(){
    this.http.get("https://gradingsystem.herokuapp.com/subject/subjectWiseMark?subjectId="+this.subId).subscribe ( (res)=>{
    this.marks = res;
    })
  }
}
