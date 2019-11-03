import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http:HttpClient) {} 
  apiUrl="https://gradingsystem.herokuapp.com/student/AddStudent?";

  addStudent(formData:any):any{
    return this.http.post(this.apiUrl,formData);
  }
}
