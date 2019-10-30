import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {
constructor(private http:HttpClient) { }
apiUrl="https://gms-faculty-ms.herokuapp.com/login?";

login(formData:any):any{
  return this.http.get(this.apiUrl+"email="+formData.email+"&password="+formData.password);
}}

