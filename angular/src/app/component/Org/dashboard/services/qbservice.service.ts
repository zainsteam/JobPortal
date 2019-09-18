import { Injectable } from '@angular/core';
import { Qbank } from '../../../../qbank';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class QbserviceService {

  private qbank:Qbank;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json' );
  constructor(private http:HttpClient) { }


  createCandidate(qbank:Qbank){
    return this.http.post(this.baseUri+'/create',qbank,{headers:this.headers});
  }

  
  readCandidatess(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  
  updateCandidate(qbank:Qbank){
    return this.http.put(this.baseUri+'/update',qbank,{headers:this.headers});
  }

  
  deleteCandidate(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }

  setter(qbank:Qbank){
    this.qbank=qbank;
  }
  
  getter( ){
    return this.qbank;
  }



}
