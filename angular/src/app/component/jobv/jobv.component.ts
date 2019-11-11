import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../Org/dashboard/services/jobservice.service';
import { Job } from '../../job';
import {Router} from '@angular/router';
// import { JobviewComponent } from '../jobview/jobview.component';

@Component({
  selector: 'app-jobv',
  templateUrl: './jobv.component.html',
  styleUrls: ['./jobv.component.css']
})
export class JobvComponent implements OnInit {
private jobs:Job[];

private count ;
  constructor(private jobservice:JobserviceService, private router:Router) { }

  ngOnInit() {
  this.ReadJobs();
  }

  ReadJobs(){
    this.jobservice.readJobs().subscribe(
      data => {
        // this.count = data.msg.length;
        this.jobs=data['msg'];
      },
      error => {
        console.log(error);
      }
    );

  }

  setJob(job){
    this.jobservice.setter(job);
    this.router.navigate(['/Job_view']);

  }

}
