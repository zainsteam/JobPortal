import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , Validators } from '@angular/forms'
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { CandidateService } from '../../../../services/candidate.service';
import { Candidate } from '../../../../candidate';

CandidateService

declare var $:any;


@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {
  public cvform : FormGroup;
  public user : Object;
  private candidate:Candidate;


  constructor(private authservice: AuthService,
    private router:Router,
    private candidateservice: CandidateService) {

   }
 
   public formSubmit(): void {
    // console.log(this.candidate);

   this.candidateservice.updateUser(this.candidate).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['profile']);
      },
      error => {
        console.log(error);
      }
    )

      }


  ngOnInit() {

  this.authservice.getprofile().subscribe(profile => {
      this.candidate = profile.user;
      console.log(profile.user);
    },
  err => {
    console.log(err);
    return false;
  });

    var i = 1;
    $("#addedu").click(function(e){
     event.preventDefault()
        i++;
         $("#edu").append('<div class="container">  <div class="row" id="edu'+i+'" >'+
         '<div class="form-group col-lg-5" >'+
           '<input type="text" class="form-control" placeholder="Education '+i+'" [(ngModel)]="education'+i+'" />  '+
         '</div>'+
         '<div class="form-group col-lg-3">'+
                    '  <input type="text" class="form-control" placeholder="Passing year '+i+'" [(ngModel)]="eyear'+i+'" />  '+
           '</div>'+
           '<div class="form-group col-lg-3">'+
                        '<input type="text" class="form-control" placeholder="Grade '+i+'" [(ngModel)]="grade'+i+'" />  '+
             '</div>'+
         '<div class="form-group col-lg-1">'+
         '<br>'+
         '<a ><span class="glyphicon glyphicon-minus" id="remove'+i+'"></span></a>'+
         '</div>'+
       '</div> </div>');
      });
      var j=1;
      $("#addskill").click(function(e){
        event.preventDefault()
           
         j++;
           if(j==2){
            $("#skill").append('<br><br><br><br>');
           }
            $("#skill").append('<div class="container"> <div class="row" id="skill">'+
        '<div class="form-group col-lg-4">'+
            '<input type="text" class="form-control " placeholder="Skill '+j+'" [(ngModel)]="skill'+j+'" />'+
          '</div>'+
          '<div class="form-group col-lg-1">'+
              '<br>'+
            '<a ><span class="glyphicon glyphicon-minus" id="remove'+j+'"></span></a>'+
            '</div>'+
          '</div> </div>');
         });
         var k = 1;
         $("#addexp").click(function(e){
          event.preventDefault()
             k++;
              $("#exp").append('<div class="container">'+
              '<div class="row" id="exp">'+
              '<div  class="form-group col-lg-5">'+
                  '<input type="text" class="form-control" placeholder="Experience '+k+'" [(ngModel)]="experience'+k+'" />  '+
                '</div> '+
                '<div class="form-group col-lg-3">'+
                    '<input type="date" class="form-control" [(ngModel)]="startdate'+k+'" />  '+
                  '</div>   '+
                  '<div class="form-group col-lg-3">'+
                      '<input type="date" class="form-control"[(ngModel)]="Enddate'+k+'" />  '+
                    '</div>   '+
                    '<div class="form-group col-lg-1"> <br>'+
              '<a ><span class="glyphicon glyphicon-minus" id="remove'+k+'"></span></a>'+
              '</div>'+
            '</div> </div>');
           });
      $("body").on('click','#remove'+i+'',function(e){
        // var span_id = $(this).attr("id");
        // $('#row'+span_id+'').remove();
        $(this).parent('div').remove(".eadd");
      });
  }


  
}
