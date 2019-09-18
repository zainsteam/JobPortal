import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken : any;
  public user:any;

  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/register',user,{headers:headers})
    .map(res => res.json());
  } 
 
  authenticationUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate',user,{headers:headers})
    .map(res => res.json());
  } 

  getprofile(){
    let headers = new Headers();
    this.loadtoken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/profile',{headers:headers})
    .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('User', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  login(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadtoken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

 
}
