import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }
 apiUrl="https://gms-faculty-ms.herokuapp.com/login?";

 login(formData:any):any{
   return this.http.get(this.apiUrl+"email="+formData.email+"&password="+formData.password);
 }}