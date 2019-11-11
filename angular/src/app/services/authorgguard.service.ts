import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthorgguardService implements CanActivate{

  constructor(private authService:AuthService, private router : Router) { }

  canActivate(){
     if(this.authService.login()){
     	let user = JSON.parse(localStorage.getItem('User'));
     	// console.log(user.Role);
     	if (user.Role == "organization")
       		return true;
     } else {
       this.router.navigate(['/Login']);
       return false;
     }
   }

}
