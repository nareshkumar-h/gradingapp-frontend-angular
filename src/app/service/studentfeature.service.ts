import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentfeatureService {

  constructor(private http:HttpClient) { }
  apiUrl="https://gradingsystem.herokuapp.com/";
  getResult(formData:any):any
  {
    return this.http.get(this.apiUrl+"studentResult?regno="+formData.regno);
  }
}
