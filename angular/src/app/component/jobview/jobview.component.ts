import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../Org/dashboard/services/jobservice.service';
import { Job } from '../../job';
import {Router} from '@angular/router';
@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.css']
})
export class JobviewComponent implements OnInit {
private job:Job;
  constructor(private jobservice:JobserviceService, private router:Router) { }

  ngOnInit() {
  this.job = this.jobservice.getter();
    console.log(this.job);
  }

}
