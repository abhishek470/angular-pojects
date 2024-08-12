import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080';
  constructor(private http:HttpClient) {}

  //Calling the server to generate token
  generateToken(credentials:any){

    return this.http.post(`${this.url}/token`,credentials);
  }

  //for login user
  loginUser(token:any) {
    localStorage.setItem('token', token);
    return true;
  }
  // to check that user is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  //logout
  logout() {
    localStorage.removeItem('token');
    return true;
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
