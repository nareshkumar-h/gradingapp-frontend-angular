import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddFacultyService {

  constructor(private http:HttpClient) {} 
  apiUrl="https://gms-faculty-ms.herokuapp.com/addUser?";

  addfaculty(formData:any):any{
    return this.http.get(this.apiUrl+"name="+formData.name+"&email="+formData.email+"&mobile="+formData.mobile+"&password="+formData.password+"&role=T");
  }
}
