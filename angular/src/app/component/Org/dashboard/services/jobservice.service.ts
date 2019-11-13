import { Injectable } from '@angular/core';
import { Job } from '../../../../job';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class JobserviceService {
  private job:Job;
  // private baseUri:string="jobs";
  private headers = new HttpHeaders().set('Content-Type', 'application/json' );
  constructor(private http:HttpClient) { }


  createJob(job:Job){
    return this.http.post('job/create',job,{headers:this.headers});
  }

  
  readJobs(){
    return this.http.get('job/read',{headers:this.headers});
  }

  
  updateJob(job:Job){
    return this.http.put('job/update',job,{headers:this.headers});
  }

  
  deleteJob(id:string){
    return this.http.delete('job/delete/'+id,{headers:this.headers});
  }

  setter(job:Job){
    this.job=job;
  }
  
  getter( ){
    return this.job;
  }

}
