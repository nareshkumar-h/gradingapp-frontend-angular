import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class AddMarksService {

  constructor(private http:HttpClient) { }
  apiUrl="https://gradingsystem.herokuapp.com/mark/updateMark";
  
  addmarks(formData:any):any{
    return this.http.post(this.apiUrl,formData);

  }
}
