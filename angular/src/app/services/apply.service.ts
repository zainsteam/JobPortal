import { Injectable } from '@angular/core';
import { Apply } from '../apply';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApplyService {

private apply:Apply;
  // private baseUri:string="http://localhost:3000/apply";
  private headers = new HttpHeaders().set('Content-Type', 'application/json' );
  constructor(private http:HttpClient) { }

  createJob(apply:Apply){
    return this.http.post('http://localhost:3000/apply/create',apply,{headers:this.headers});
  }
}
