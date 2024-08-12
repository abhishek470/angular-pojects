import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8080"
  constructor(private http:HttpClient) {

   }
 public getuser(){
  return this.http.get(`${this.baseUrl}/getuser`);
 }
}
