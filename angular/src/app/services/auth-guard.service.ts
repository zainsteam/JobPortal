import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService, private router : Router) {

   }
   canActivate(){
     if(this.authService.login()){
      let user = JSON.parse(localStorage.getItem('User'));
      if (user.Role == "candidate")
          return true;
     } else {
       this.router.navigate(['/Login']);
       return false;
     }
        }

  }
