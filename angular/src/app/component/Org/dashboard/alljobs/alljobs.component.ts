import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../services/jobservice.service';
import { Job } from '../../../../job';
import {Router} from '@angular/router';


@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit {
  private jobs:Job[];

  constructor(private jobservice:JobserviceService, private router:Router) { }

  ngOnInit() {
    this.readCandidates();
  }

  readCandidates(){
    this.jobservice.readCandidatess().subscribe(
      data => {
        console.log(data);
        this.jobs=data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }

  doupdate(Job){
    this.jobservice.setter(Job);
    this.router.navigate(['/registration']);  
  }

  dodelete(Job){
    this.jobservice.deleteCandidate(Job._id).subscribe(
      data => {
        this.jobs.splice(this.jobs.indexOf(Job),1);
      },
      error => {

      }
    )
  }

}
