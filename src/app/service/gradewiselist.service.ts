import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class GradewiselistService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://gradingsystem.herokuapp.com/";
  gradewise():any {
    return this.http.get(this.apiUrl+'grade/gradeWiseList');
  }
}
