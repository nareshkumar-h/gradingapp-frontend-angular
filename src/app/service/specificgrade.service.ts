import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class SpecificgradeService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://gradingsystem.herokuapp.com/grade/SpecficGradeWiseList?grade=";
  specificgrade(formData:any):any {
    return this.http.get(this.apiUrl+formData.grade);
  }
}
