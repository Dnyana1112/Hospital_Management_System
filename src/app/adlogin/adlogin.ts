import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  templateUrl: './adlogin.html',
  styleUrl: './adlogin.css',
})
export class Adlogin {
username: string = '';
  password: string = '';  

  invalidLogin = false;


  constructor(private adminauthService:AdminauthService  ,private router:Router) { } 

  checkLogin() {

    if (this.adminauthService.authenticate(this.username, this.password)) { 
      this.router.navigate(['admindash']);
      this.invalidLogin = false;
      return true;
    }
    else {
      this.invalidLogin = true;
      alert('Invalid Credentials');
      this.router.navigate(['home']);
      return false;
    }
  }
}
