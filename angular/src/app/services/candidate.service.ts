import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Candidate } from '../candidate';

@Injectable()
export class CandidateService {

	private candidate:Candidate;
  	private baseUri:string="http://localhost:8080";
  	private headers = new HttpHeaders().set('Content-Type', 'application/json' );

  constructor(private http:HttpClient) { }

   updateUser(candidate:Candidate){
   	// console.log(candidate);	
    return this.http.put('users/update',candidate,{headers:this.headers});
  }

 
}
