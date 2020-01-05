import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../Org/dashboard/services/jobservice.service';
import { Job } from '../../job';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApplyService } from '../../services/apply.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages/module';


@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.css']
})
export class JobviewComponent implements OnInit {
private job:Job;

public user:any;
  constructor(private flashmeassage: FlashMessagesService,
    private jobservice:JobserviceService,
     private router:Router,
     private authservice: AuthService,
     private applyservice : ApplyService) { }

  ngOnInit() {

  this.authservice.getprofile().subscribe(profile => {
      this.user = profile.user;
      },
  err => {
    return false;
  });


  this.job = this.jobservice.getter();
  if(this.job == undefined){
  	this.router.navigate(['/Job']);
  }
  }

  ApplyJob(){

    if (!this.user){
      this.flashmeassage.show("Please Login Yourself First", {cssClass: 'alert-danger', timeout:3000});
      this.router.navigate(['/Login']);
      console.log("start");
    }
    else{
  const apply ={
      CanEmail: this.user.Email,
      JobId: this.job._id,
    }
  this.applyservice.createJob(apply).subscribe(data => {
    // console.log(data["success"]);
      if(data["success"]){
        this.flashmeassage.show('Applied',{cssClass: 'alert-success',timeout:3000});
      } else {
        this.flashmeassage.show(data["msg"],{cssClass: 'alert-danger',timeout:3000});
      }
    });

  }
}

}
