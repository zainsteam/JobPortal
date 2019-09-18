import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages/module';
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flashmeassage: FlashMessagesService,
    private authservice: AuthService,
    private router:Router
  ) { }

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

  logoutclick(){
    this.authservice.logout();
    this.flashmeassage.show('you are log out', {cssClass: 'alert-success', timeout:3000});
    this.router.navigate(['']);
    return false;
  }

}
