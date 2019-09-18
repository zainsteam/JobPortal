import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { JobserviceService } from '../dashboard/services/jobservice.service';
import { Job } from '../../../job';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jobservice : JobserviceService) { }

  ngOnInit() {
    $(document).ready(function() {
      $("#panel1").click(function() {
        $("#arow1").toggleClass("fa-chevron-left");
        $("#arow1").toggleClass("fa-chevron-down");
      });
      
      $("#menu-icon").click(function() {
        $("#chang-menu-icon").toggleClass("fa-bars");
        $("#chang-menu-icon").toggleClass("fa-times");
        $("#show-nav").toggleClass("hide-sidebar");
        $("#show-nav").toggleClass("left-sidebar");
          
        $("#left-container").toggleClass("less-width");
        $("#right-container").toggleClass("full-width");
      });  
    });
  }

  newCandidate(event:any){
    event.preventDefault();
    this.jobservice.setter(new Job());
  }



}
