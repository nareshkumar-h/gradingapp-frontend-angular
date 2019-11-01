import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {

  constructor(private http:HttpClient) { }
  apiUrl="https://gradingsystem.herokuapp.com/student/login?";

  login(formData:any):any{
    return this.http.get(this.apiUrl+"regno="+formData.studentid+"&email="+formData.email);
  }
}
