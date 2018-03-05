import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  signup(credentials) { 
    return this.http.post('/users/signup',credentials) 
      .map(response => {
        console.log(response);
        let result = response;
        if(result && result.json().tokens[0].token){
          console.log("true");
          localStorage.setItem('token', result.json().tokens[0].token);
          return true;
        }
        // localStorage.setItem('token', result.json().tokens[0].token);
        return false;
      });
  }

  login(credentials) { 
    return this.http.post('/users/login',credentials) 
      .map(response => {
        let result = response;
        if(result && result.json().tokens[0].token){
          localStorage.setItem('token', result.json().tokens[0].token);
          return true;
        }
        // localStorage.setItem('token', result.json().tokens[0].token);
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    // return true;
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    let jwtHelper = new JwtHelper();
    return jwtHelper.decodeToken(token);

  }
}

