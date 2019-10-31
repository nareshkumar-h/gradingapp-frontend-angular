import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {

  constructor(private http:HttpClient) { }
  apiUrl="https://gradingsystem.herokuapp.com/?";

  login(formData:any):any{
    return this.http.get(this.apiUrl+"email="+formData.email+"&studentid="+formData.studentid);
  }
}
