import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewgrade',
  templateUrl: './viewgrade.component.html',
  styleUrls: ['./viewgrade.component.css']
})
export class ViewgradeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listGrades();
  }
  grades:any = [];

  listGrades(){
    this.http.get("https://gradingsystemgrade.herokuapp.com/ScoreRange/viewscorerange").subscribe ( (res)=>{
      this.grades = res;
    })
  }
}
