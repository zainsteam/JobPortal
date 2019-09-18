import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup , Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { JobserviceService } from '../services/jobservice.service';
import { AuthService } from '../../../../services/auth.service';

import { Job } from '../../../../job';

declare var $:any;

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  public jf = "Post your Job / Vacancy";
  private job:Job;
    public user:any;

  constructor(private jobservice:JobserviceService, private router:Router,private authservice: AuthService) { }

  ngOnInit() {

        this.authservice.getprofile().subscribe(profile => {
      this.user = profile.user;
    },
  err => {
    console.log(err);
    return false;
  });


    
    this.job = this.jobservice.getter();
    console.log(this.job);


    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});

  }

  createCandidate(){

    console.log(this.job);
    this.job.Email = this.user.Email;

    if (this.job._id == undefined){
    this.jobservice.createCandidate(this.job).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['Dashboard/Dashboard/alljobs']);
      },
      error => {
        console.log(error);
      }
    )
  }else{
    this.jobservice.updateCandidate(this.job).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['Dashboard/Dashboard/alljobs']);
      },
      error => {
        console.log(error);
      }
    )
  }
  }

}
