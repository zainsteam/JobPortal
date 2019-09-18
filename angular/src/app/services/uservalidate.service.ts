import { Injectable } from '@angular/core';

@Injectable()
export class UservalidateService {

  constructor() { }

  validateregister(user){
    if(user.Email == undefined || user.UserName == undefined || user.Password == undefined || user.FirstName == undefined ){
      return false;
    } else {
      return true;
    }
  }
  validateemail(Email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
  }
}
