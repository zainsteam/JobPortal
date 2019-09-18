import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
import { OrgauthService } from '../../../services/orgauth.service.service';


@Component({
  selector: 'app-orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.css']
})
export class OrgloginComponent implements OnInit {
  UserName: String;
  Password: String;
  constructor(private flashmeassage: FlashMessagesService,
    private authservice: OrgauthService,
    private router:Router) { }

  ngOnInit() {
  }

  public formSubmit( ){
    const user = {
      UserName: this.UserName,
      Password: this.Password
    }

    this.authservice.authenticationUser(user).subscribe(data =>{
      if(data.success){
        this.authservice.storeUserData(data.token, data.user);
        this.flashmeassage.show('you are logged in',{cssClass: 'alert-success', timeout:3000});
        this.router.navigate(['Dashboard']);
      } else {
        this.flashmeassage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        this.router.navigate(['Orglogin']);
      }
    });
  }



  Routeregister(){
    this.router.navigate(['Orgregister']);
  }

}
