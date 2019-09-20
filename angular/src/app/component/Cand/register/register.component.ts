import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UservalidateService } from '../../../services/uservalidate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages/module';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  titl = ' Registration';
  Email: String;
  UserName: String;
  Password: String;
  FirstName: String;
  Role:String; 


  constructor(private uservalidateservice: UservalidateService,
     private flashmeassage: FlashMessagesService,
     private authservice: AuthService,
     private router:Router  
    ) {
    
  }

  ngOnInit() {
    $(document).ready(function(){

      //minimum 8 characters
      var bad = /(?=.{8,}).*/;
      //Alpha Numeric plus minimum 8
      var good = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{8,}$/;
      //Must contain at least one upper case letter, one lower case letter and (one number OR one special char).
      var better = /^(?=\S*?[A-Z])(?=\S*?[a-z])((?=\S*?[0-9])|(?=\S*?[^\w\*]))\S{8,}$/;
      //Must contain at least one upper case letter, one lower case letter and (one number AND one special char).
      var best = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;
      
      $('#password').on('keyup', function () {
          var password = $(this);
          var pass = password.val();
          var passLabel = $('[for="password"]');
          var stength = 'Weak';
          var pclass = 'danger';
          if (best.test(pass) == true) {
              stength = 'Very Strong';
              pclass = 'success';
          } else if (better.test(pass) == true) {
              stength = 'Strong';
              pclass = 'warning';
          } else if (good.test(pass) == true) {
              stength = 'Almost Strong';
              pclass = 'warning';
          } else if (bad.test(pass) == true) {
              stength = 'Weak';
          } else {
              stength = 'Very Weak';
          }
      
          var popover = password.attr('data-content', stength).data('bs.popover');
          popover.setContent();
          popover.$tip.addClass(popover.options.placement).removeClass('danger success info warning primary').addClass(pclass);
      
      });
      
      $('input[data-toggle="popover"]').popover({
          placement: 'top',
          trigger: 'focus'
      });
      
      })
  }

  public formSubmit() {
    const user ={
      Email: this.Email,
      UserName: this.UserName,
      Password: this.Password,
      FirstName: this.FirstName,
      Role:this.Role
    }
        // console.log(user);

    //required fiels
    if(!this.uservalidateservice.validateregister(user)){
      this.flashmeassage.show('please fill in all fields',{cssClass: 'alert-danger',timeout: 3000 });
      return false;
    }

    //email validation
    if(!this.uservalidateservice.validateemail(user.Email)){
      this.flashmeassage.show('please use valid email ',{cssClass: 'alert-danger',timeout: 3000 });
      return false;
    }

    //register User
    this.authservice.registerUser(user).subscribe(data => {
      // console.log(user);
      if(data.success){
        this.flashmeassage.show('you are now registered and can log in',{cssClass: 'alert-success',timeout:3000});
        this.router.navigate(['/Login']);
      } else {
        this.flashmeassage.show('something goes wrong',{cssClass: 'alert-danger',timeout:3000});
        this.router.navigate(['/Register']);
      }
    });
  }
}
