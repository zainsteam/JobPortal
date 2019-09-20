import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages/module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titls = 'Login';
  UserName: String;
  Password: String;
  constructor(private flashmeassage: FlashMessagesService,
    private authservice: AuthService,
    private router:Router) {
  }
  public formSubmit( ){
    const user = {
      UserName: this.UserName,
      Password: this.Password
    }

    this.authservice.authenticationUser(user).subscribe(data =>{
      if(data.success){
        this.authservice.storeUserData(data.token, data.user);
        if(data.user.Role == "candidate"){
        // this.flashmeassage.show('you are logged in',{cssClass: 'alert-success', timeout:3000});
        this.router.navigate(['profile']);
      }
      if(data.user.Role == "organization"){
        this.router.navigate(['Dashboard']);
      }
                this.flashmeassage.show('you are logged in',{cssClass: 'alert-success', timeout:3000});
      } else {
        this.flashmeassage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        this.router.navigate(['Login']);
      }
    });
  }
   

  ngOnInit() {
  }

  Routeregister(){
    this.router.navigate(['Register']);
  }

}
