import { Injectable } from '@angular/core';
import { Job } from '../../../../job';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class JobserviceService {
  private job:Job;
  // private baseUri:string="http://localhost:3000/jobs";
  private headers = new HttpHeaders().set('Content-Type', 'application/json' );
  constructor(private http:HttpClient) { }


  createCandidate(job:Job){
    return this.http.post('/create',job,{headers:this.headers});
  }

  
  readCandidatess(){
    return this.http.get('/read',{headers:this.headers});
  }

  
  updateCandidate(job:Job){
    return this.http.put('/update',job,{headers:this.headers});
  }

  
  deleteCandidate(id:string){
    return this.http.delete('/delete/'+id,{headers:this.headers});
  }

  setter(job:Job){
    this.job=job;
  }
  
  getter( ){
    return this.job;
  }

}
